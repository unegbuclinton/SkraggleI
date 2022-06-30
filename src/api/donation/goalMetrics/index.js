import request from 'apiInstance';

export const getRevenueGoal = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/summary/goal'
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};
