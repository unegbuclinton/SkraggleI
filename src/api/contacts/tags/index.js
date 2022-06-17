import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addTags = async (body) => {
  try {
    const createTagsResponse = await request({
      method: 'post',
      url: '/contacts/tags',
      data: body
    });
    toast.done('Tag created successfully');
    return createTagsResponse;
  } catch (error) {
    toast.error('Tag did not created successfully');
  }
};

export const allTags = async () => {
  try {
    const tagsResponse = await request({
      method: 'get',
      url: '/contacts/tags?cursor=0&limit=25&direction=after'
    });
    return tagsResponse?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const deleteTag = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/contacts/tags`,
      data: body
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
