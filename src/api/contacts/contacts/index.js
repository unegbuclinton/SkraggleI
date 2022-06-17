import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addContact = async (body) => {
  try {
    const createContactResponse = await request({
      method: 'post',
      url: '/contacts/users',
      data: body
    });
    return createContactResponse;
  } catch (error) {
    const errorMesssage = error.response.data.message;
    const res = errorMesssage.split('.', 1);
    toast.error(`${res}`);
  }
};

export const allContacts = async () => {
  try {
    const contactResponse = await request({
      method: 'get',
      url: '/contacts/users?cursor=0&limit=20&direction=after'
    });
    return contactResponse?.data?.message?.rows;
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

    return contactResponse?.data?.message;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async (body) => {
  try {
    const contactResponse = await request({
      method: 'delete',
      url: `/contacts/users`,
      data: body
    });

    return contactResponse;
  } catch (error) {
    console.log(error);
  }
};
