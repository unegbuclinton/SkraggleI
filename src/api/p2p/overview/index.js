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
    toast.error('P2P did not created successfully');
  }
};

export const allP2P = async () => {
  try {
    const p2pResponse = await request({
      method: 'get',
      url: '/p2p?cursor=0&direction=after&limit=20'
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
