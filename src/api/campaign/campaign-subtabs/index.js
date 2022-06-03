import request from 'apiInstance';

export const allPeerToPeer = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/campaigns/${id}/p2p`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
