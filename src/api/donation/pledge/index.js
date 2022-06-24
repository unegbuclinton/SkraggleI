import request from 'apiInstance';

export const allPledge = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/pledges'
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

export const deletePledge = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/donations/pledges`,
      data: body
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
