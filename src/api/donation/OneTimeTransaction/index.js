import request from 'apiInstance';

export const createOneTimeTransaction = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/donations/one-time-transactions',
      data: body
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOneTimeTransaction = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/one-time-transactions?cursor=-1&direction=after&limit=5'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneTimeTransaction = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: '/donations/one-time-transactions',
      data: body
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
