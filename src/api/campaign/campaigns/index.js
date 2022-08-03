import request from 'apiInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getCampaigns = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/campaigns?cursor=-1&direction=after&limit=20&archived=false'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};
export const getArchivedCampaigns = async () => {
  try {
    const response = await request({
      method: 'get',
      url: '/campaigns?cursor=-1&direction=after&limit=20&archived=true'
    });
    return response?.data?.message?.rows;
  } catch (error) {
    return error;
  }
};

export const addCampaign = async (body) => {
  try {
    const response = await request({
      method: 'post',
      url: '/campaigns',
      data: body
    });
    return response.data;
  } catch (error) {
    toast.error();
    console.log(error);
  }
};

export const individualCampaign = async (id) => {
  try {
    const campaignResponse = await request({
      method: 'get',
      url: `/campaigns/${id}`
    });

    return campaignResponse?.data?.message;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCampaign = async (body) => {
  try {
    const response = await request({
      method: 'delete',
      url: `/campaigns`,
      data: body
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const updateCampaign = async ({ body, id }) => {
  try {
    const response = await request({
      method: 'patch',
      url: `/campaigns/${id}`,
      data: body
    });

    return response;
  } catch (error) {
    return error;
  }
};
