import request from 'apiInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getCompanies = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/contacts/companies?cursor=0&direction=after&limit=25'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    toast.error(error);
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
  }
};

export const deleteCompany = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/contacts/companies`,
      data: body
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
