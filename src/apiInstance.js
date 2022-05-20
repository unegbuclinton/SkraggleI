import axios from 'axios';
import store from 'store';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

/**
 *  refresh user token
 * @param {payload} param0
 */
function refreshUserToken({ refreshToken }) {
  return axios({
    method: 'POST',
    url: `${process.env.REACT_APP_BASE_URL}/admin/refresh`,
    headers: { Authorization: `Bearer ${refreshToken}` }
  });
}

request.interceptors.request.use((config) => {
  const {
    auth: { token }
  } = store.getState();

  const { noToken } = config.headers;
  delete config.headers.noToken;

  if (!token || noToken) return config;

  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token.access}`
    }
  };
  return newConfig;
});

//Add a response interceptor
request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const {
      auth: { token },
      user: { data: userData }
    } = store.getState();

    if (error.response && error.response.status === 401 && token.access) {
      if (userData?.id && userData?.email && token.refresh) {
        try {
          const { refresh } = token;
          const refreshTokenResponse = await refreshUserToken({
            refresh
          });
          const { access_token: newToken } = refreshTokenResponse.data;

          const newConfig = {
            ...error.config,
            headers: {
              ...error.config.headers,
              Authorization: `Bearer ${newToken}`
            }
          };
          const newResponse = await axios.request(newConfig);
          // store.dispatch(fetchUser());
          return newResponse;
        } catch (err) {
          // store.dispatch(logout());

          return Promise.reject(error);
        }
      } else {
        // store.dispatch(logout());
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default request;
