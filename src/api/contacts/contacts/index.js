import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addContact = async (body) => {
  try {
    const createContactResponse = await request({
      method: 'post',
      url: '/contacts/users',
      data: body
    });
    toast.done('Contact created successfully');
    return createContactResponse;
  } catch (error) {
    toast.error('Contact did not created successfully');
  }
};

export const allContacts = async () => {
  try {
    const contactResponse = await request({
      method: 'get',
      url: '/contacts/all/1'
    });
    return contactResponse.data.message;
  } catch (error) {
    console.log(error);
  }
};

export const eachContact = async (id) => {
  try {
    const contactResponse = await request({
      method: 'get',
      url: `/contacts/users/${id}`
    });
    return contactResponse.data.message;
  } catch (error) {
    console.log(error);
  }
};
