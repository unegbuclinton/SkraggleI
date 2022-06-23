import request from 'apiInstance';
import { toast } from 'react-toastify';

export const addTodo = async (body) => {
  try {
    return await request({
      method: 'post',
      url: '/contacts/todos',
      data: body
    });
  } catch (error) {
    toast.error('Todo not created successfully');
  }
};

// export const getTodos = async () => {
//   try {
//     const response = await request({
//       method: 'get',
//       url: '/contacts/todos?cursor=-1&direction=after&limit=25'
//     });
//     return response?.data?.message?.rows;
//   } catch (error) {
//     toast.error(error);
//   }
// };

export const getEachTodo = async (id) => {
  try {
    const response = await request({
      method: 'get',
      url: `contacts/users/${id}/todos`
    });
    return response?.data?.message?.rows;
  } catch (error) {
    toast.error(error);
  }
};
