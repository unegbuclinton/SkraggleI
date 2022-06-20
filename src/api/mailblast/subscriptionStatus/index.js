import request from 'apiInstance';

export const getSubscriptionStatus = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/mailblasts/subscription'
    });

    return response?.data?.message;
  } catch (error) {
    console.log(error);
  }
};
