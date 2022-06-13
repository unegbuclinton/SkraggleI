import request from 'apiInstance';

export const addEvents = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/event/create',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getEvents = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/event?cursor=0&direction=after&limit=20'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
