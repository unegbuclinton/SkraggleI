import request from 'apiInstance';

export const createRecurringTransaction = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/donations/recurring-transactions',
      data: body
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRecurringTransaction = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/donations/recurring-transactions?cursor=-1&direction=after&limit=20'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    console.log(error);
  }
};
