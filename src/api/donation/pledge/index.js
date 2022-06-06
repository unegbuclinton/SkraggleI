import request from 'apiInstance';

export const allPledge = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/pledges?cursor=0&direction=after&limit=20'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};
