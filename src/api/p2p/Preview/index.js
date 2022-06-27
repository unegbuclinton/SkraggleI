import request from 'apiInstance';

export const getP2PDonation = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/p2p/${id}/donations`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};

export const getP2PRankedParticipant = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/p2p/${id}/ranked-participants`
    });
    console.log(response);

    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};
