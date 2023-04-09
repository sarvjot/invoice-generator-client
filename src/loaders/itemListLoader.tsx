import api from '../utils/api';

export default async function() {
  try {
    const response = await api.get('/item');
    const items = response.data.items;
    return { items };
  } catch (error) {
    console.log(error);
    return error;
  }
}
