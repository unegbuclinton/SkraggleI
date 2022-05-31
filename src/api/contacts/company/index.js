import request from 'apiInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getCompanies = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/company/all/1'
    });
    return response?.data.message;
  } catch (error) {
    toast.error(error);
    console.log(error);
  }
};

export const addCompanies = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/contacts/companies',
      data: body
    });
  } catch (error) {
    toast.error();
    console.log(error);
  }
};
