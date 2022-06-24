import request from 'apiInstance';

export const createOneTimeTransaction = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/donations/one-time-transactions',
      data: body
    });
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
