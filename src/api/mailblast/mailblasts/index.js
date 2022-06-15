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
      url: '/mailblasts?cursor=0&direction=after&limit=20'
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
