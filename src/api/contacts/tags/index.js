import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addTags = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/tags/add',
      data: body
    });
  } catch (error) {
    toast.error('Tag did not created successfully');
  }
};

export const allTags = async () => {
  try {
    const tagsResponse = await request({
      method: 'get',
      url: '/tags/details/1'
    });
    return tagsResponse?.data.message;
  } catch (error) {
    return error;
  }
};
