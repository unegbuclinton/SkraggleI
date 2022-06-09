import request from 'apiInstance';

export const addPromoCode = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/promocode/create',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getPromoCode = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/promocode?cursor=0&direction=after&limit=20'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
