import request from 'apiInstance';

export const createRecurringTransaction = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/donations/recurring-transactions',
      data: body
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRecurringTransaction = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/recurring-transactions'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecurringTransaction = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: '/donations/recurring-transactions',
      data: body
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
