import request from 'apiInstance';

export const contactSearch = async (search, page = 0) => {
  try {
    const response = await request({
      method: 'get',
      url: `contacts/search?search_string=${search}&page=${page}`
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
};

export const companiesSearch = async (search, page = 0) => {
  try {
    const response = await request({
      method: 'get',
      url: `company/search?search_string=${search}&page=${page}`
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
};

export const houseHoldSearch = async (search, page = 0) => {
  try {
    const response = await request({
      method: 'get',
      url: `households/search?search_string=${search}&page=${page}`
    });
    console.log(response.data.message);
    return response?.data.message;
  } catch (error) {
    return error;
  }
};

// export const tagsSearch = async (search, page = 0) => {
//   try {
//     const response = await request({
//       method: 'get',
//       url: `households/search?search_string=${search}&page=${page}`
//     });
//     return response?.data.message;
//   } catch (error) {
//     return error;
//   }
// };

export const segmentSearch = async (search, page = 0) => {
  try {
    const response = await request({
      method: 'get',
      url: `segments/search?search_string=${search}&page=${page}`
    });
    return response?.data.message;
  } catch (error) {
    return error;
  }
};
