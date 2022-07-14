import request from 'apiInstance';

export const getUser = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/admin'
    });
    return response?.data?.message;
  } catch (error) {
    console.log(error);
  }
};

// const getUser = async () => {
//     const response = await apiInstance({
//       method: 'get',
//       url: '/admin'
//     });
//     const data = response?.data?.message;
//     setUserData(data);
//     // store.set()
//     // dispatch(addUserData(data));
//   };
