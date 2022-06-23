import request from 'apiInstance';

export const allMailBlasts = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/campaigns/${id}/mailblasts`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
