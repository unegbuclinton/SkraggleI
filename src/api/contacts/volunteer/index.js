import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addVolunteer = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/contacts/volunteer-activity',
      data: body
    });
  } catch (error) {
    toast.error('Todo not created successfully');
  }
};

export const getVolunteer = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/contacts/volunteer-activity?cursor=0&limit=25&direction=after'
    });
    return response?.data?.message.rows;
  } catch (error) {
    toast.error(error);
  }
};
