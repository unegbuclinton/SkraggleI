import request from 'apiInstance';

export const contactSearch = async () => {
  try {
    const response = await request({
      method: 'get',
      url: 'contacts/search?search_string=tag30&page=1'
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
};
