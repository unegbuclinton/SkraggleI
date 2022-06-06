import request from 'apiInstance';

export const peerToPeer = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/peertopeer/create_p2p',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPeerToPeer = async () => {
  try {
    const response = await request({
      method: 'get',
      url: 'peertopeer/all/1'
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};
