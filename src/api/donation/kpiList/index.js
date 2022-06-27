import request from 'apiInstance';

export const getKpiOptions = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/kpi'
    });
    return response?.data?.message;
  } catch (error) {
    console.log(error);
  }
};
