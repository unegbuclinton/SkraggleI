import request from 'apiInstance';

export const addHousehold = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/households/add',
      data: body
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllHouseHold = async () => {
  try {
    const response = await request({
      method: 'get',
      url: 'households/all/1'
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
};
