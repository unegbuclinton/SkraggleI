import request from 'apiInstance';

export const getActivities = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/summary/fundraising-activity'
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};
