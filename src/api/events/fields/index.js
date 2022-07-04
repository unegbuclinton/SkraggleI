import request from 'apiInstance';

export const addField = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/field/create',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getField = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/field'
    });

    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
// export const getFieldById = async (id) => {
//   try {
//     const response = await request({
//       method: 'get',
//       url: `/promocode/info/${id}`
//     });
//     console.log(response);
//     return response?.data?.message;
//   } catch (error) {
//     return error;
//   }
// };

export const addCloneField = async (body) => {
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

export const updateFieldById = async ({ body, id }) => {
  try {
    const response = await request({
      method: 'patch',
      url: `/field/${id}`,
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteField = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: '/field',
      data: body
    });
    return response;
  } catch (error) {
    return error;
  }
};
