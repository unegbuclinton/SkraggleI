import request from 'apiInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getCampaings = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/campaigns/all/1'
    });
    console.log(response);
    return response?.data.message;
  } catch (error) {
    toast.error(error);
    console.log(error);
  }
};

export const addCampaign = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/campaigns/create',
      data: body
    });
    return response.data;
  } catch (error) {
    toast.error();
    console.log(error);
  }
};
