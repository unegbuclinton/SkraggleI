import request from 'apiInstance';

export const getElements = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/elements?cursor=0&direction=after&limit=20'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
