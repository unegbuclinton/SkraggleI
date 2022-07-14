import request from 'apiInstance';

export const p2pLeaderBoard = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/report/p2p-leaderboard'
    });
    return response?.data?.message;
  } catch (error) {
    console.log(error);
  }
};

export const donationByContact = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/report/donations-by-contact'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};
