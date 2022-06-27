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
      url: '/event'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const getEventById = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/event/info/${id}`
    });

    return response?.data?.message;
  } catch (error) {
    return error;
  }
};

export const updateEventById = async ({ body, id }) => {
  try {
    const response = await request({
      method: 'patch',
      url: `/event/${id}`,
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteEvent = async ({ id }) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/event/${id}`
    });
    return response;
  } catch (error) {
    return error;
  }
};
