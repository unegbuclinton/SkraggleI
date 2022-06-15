import request from 'apiInstance';

export const addPromoCode = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/promocode/create',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getPromoCode = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/promocode?cursor=0&direction=after&limit=20'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
export const getPromoCodeById = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `/promocode/info/${id}`
    });
    return response?.data?.message;
  } catch (error) {
    return error;
  }
};

export const updatePromoCodeById = async ({ body, id }) => {
  try {
    const response = await request({
      method: 'patch',
      url: `/promocode/${id}`,
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deletePromoCode = async ({ id }) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/promocode/${id}`
    });
    return response;
  } catch (error) {
    return error;
  }
};
