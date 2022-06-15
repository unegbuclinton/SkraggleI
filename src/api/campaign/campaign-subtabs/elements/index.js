import request from 'apiInstance';

export const allElements = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/campaigns/${id}/elements`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
