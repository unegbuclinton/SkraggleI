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
