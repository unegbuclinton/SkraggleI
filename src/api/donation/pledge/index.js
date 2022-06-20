import request from 'apiInstance';

export const allPledge = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/pledges?cursor=-1&direction=after&limit=20'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const createPledge = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/donations/pledges',
      data: body
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
