import request from 'apiInstance';

export const getDonationHistory = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/summary/transactions/donation/365'
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};

export const getRevenueHistory = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/summary/transactions/revenue/365'
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};
