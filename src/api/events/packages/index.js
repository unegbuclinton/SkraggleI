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
      url: '/package'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const addClonePackages = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/package/clone',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deletePackages = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: '/package',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};
