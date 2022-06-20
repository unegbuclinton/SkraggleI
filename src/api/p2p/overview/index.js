import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addP2P = async (body) => {
  try {
    const createP2PResponse = await request({
      method: 'post',
      url: '/p2p',
      data: body
    });
    toast.done('P2P created successfully');
    return createP2PResponse;
  } catch (error) {
    const errorMesssage = error.response.data.message;
    const res = errorMesssage.split('.', 1);
    toast.error(`${res}`);
  }
};

export const allP2P = async () => {
  try {
    const p2pResponse = await request({
      method: 'get',
      url: '/p2p?cursor=-1&direction=after&limit=20'
    });
    return p2pResponse?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};

export const p2pById = async (id) => {
  try {
    const p2pResponse = await request({
      method: 'get',
      url: `/p2p/${id}`
    });
    return p2pResponse?.data?.message;
  } catch (error) {
    console.log(error);
  }
};

export const deleteP2P = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/p2p`,
      data: body
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
