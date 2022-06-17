import request from 'apiInstance';

export const addForms = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/forms',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getForms = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/forms'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const individualForm = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/forms/${id}`
    });

    return response?.data?.message;
  } catch (error) {
    return error;
  }
};

export const deleteForm = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/forms`,
      data: body
    });

    return response;
  } catch (error) {
    return error;
  }
};
