/* eslint-disable no-unused-vars */
import axios from 'axios';
import { logoutUser } from 'features/auth/authSlice';
import { toast } from 'react-toastify';
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
      Authorization: `Bearer ${token.access_token}`
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
    // const {
    //   auth: { token },
    //   user: { data: userData }
    // } = store.getState();
    const storeState = store.getState();
    const { auth, user } = storeState;
    const token = auth?.token;
    const userData = user?.data;

    if (error?.response?.status === 401 && token.access_token) {
      try {
        toast.error(error?.response?.data?.message);
        store.dispatch(logoutUser());
      } catch (error) {
        console.log(error);
      }
      // if (userData?.id && userData?.email && token.refresh) {
      //   try {
      //     const { refresh } = token;
      //     const refreshTokenResponse = await refreshUserToken({
      //       refresh
      //     });
      //     const { access_token: newToken } = refreshTokenResponse.data;

      //     const newConfig = {
      //       ...error.config,
      //       headers: {
      //         ...error.config.headers,
      //         Authorization: `Bearer ${newToken}`
      //       }
      //     };
      //     const newResponse = await axios.request(newConfig);
      //     // store.dispatch(fetchUser());
      //     return newResponse;
      //   } catch (err) {
      //     // store.dispatch(logout());

      //     return Promise.reject(error);
      //   }
      // } else {
      //   store.dispatch(logoutUser());
      //   return Promise.reject(error);
      // }
    } else if (error?.response?.status === 401) {
      try {
        toast.error(error?.response?.data?.message);
        store.dispatch(logoutUser());
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);

export default request;
