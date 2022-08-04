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
export const addCloneEvents = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/event/clone',
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
      url: '/event?cursor=-1&direction=after&limit=20&archived=false'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const getArchivedEvents = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/event?cursor=-1&direction=after&limit=20&archived=true'
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

export const deleteEvent = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: '/event',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};
