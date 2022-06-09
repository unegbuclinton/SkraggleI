import request from 'apiInstance';

export const addPackages = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/package/create',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getPackages = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/package?cursor=0&direction=after&limit=20'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
