import request from 'apiInstance';

export const addHousehold = (body) => {
  try {
    return request({
      method: 'post',
      url: '/households/add',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
};
