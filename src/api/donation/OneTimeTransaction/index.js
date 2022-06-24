export const createOneTimeTransaction = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/donations/pledges',
      data: body
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
