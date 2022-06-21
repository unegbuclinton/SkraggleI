import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addMailBlast = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/mailblasts',
      data: body
    });
    return response;
  } catch (error) {
    toast.error('Mail-blast did not created successfully');
  }
};

export const listMailBlast = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/mailblasts'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMailBlast = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/mailblasts`,
      data: body
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const mailBlastById = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/mailblasts/${id}`
    });

    return response?.data?.message;
  } catch (error) {
    console.log(error);
  }
};
