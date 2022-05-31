import request from 'apiInstance';

export const createInteractions = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: `/contacts/interactions`,
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const allInteractions = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/contacts/users/${id}/interactions`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
