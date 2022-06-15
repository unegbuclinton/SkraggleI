import request from 'apiInstance';

export const allForms = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/campaigns/${id}/forms`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
