import request from 'apiInstance';

export const allInteractions = async (id) => {
  try {
    return await request({
      method: 'get',
      url: `/contacts/users/${id}/interactions`
    });
  } catch (error) {
    return error;
  }
};
