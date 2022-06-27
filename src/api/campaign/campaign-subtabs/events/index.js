import request from 'apiInstance';

export const campaignEvents = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/campaigns/${id}/events`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
