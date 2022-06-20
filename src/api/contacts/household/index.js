import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addHousehold = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/contacts/households',
      data: body
    });
  } catch (error) {
    toast.error(error);
  }
};

export const getAllHouseHold = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/contacts/households?cursor=-1&limit=25&direction=after'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const deleteHousehold = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/contacts/households`,
      data: body
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
