import request from 'apiInstance';

export const editContact = async ({ body, id }) => {
  try {
    return await request({
      method: 'patch',
      url: `/contacts/users/${id}`,
      data: body
    });
  } catch (error) {
    return error;
  }
};
