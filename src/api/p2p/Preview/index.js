import request from 'apiInstance';

export const getP2PDonation = async (id) => {
  try {
    const p2pResponse = await request({
      method: 'get',
      url: `/p2p/${id}/donations`
    });
    return p2pResponse?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};

export const getP2PRankedParticipant = async (id) => {
  try {
    const p2pResponse = await request({
      method: 'get',
      url: `/p2p/${id}/ranked-participants`
    });
    return p2pResponse?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};
