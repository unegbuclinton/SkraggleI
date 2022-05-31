import request from 'apiInstance';

export const editContact = async ({ body, id }) => {
  try {
    const response = await request({
      method: 'patch',
      url: `/contacts/users/${id}`,
      data: body
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};
