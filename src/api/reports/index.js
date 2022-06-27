import request from 'apiInstance';

export const p2pLeaderBoard = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/report/p2p-leaderboard/30'
    });
    console.log(response?.data?.message?.rows);
    return response?.data?.message?.rows;
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
    console.log(response?.data?.message?.rows);
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};
