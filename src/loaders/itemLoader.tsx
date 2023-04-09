import api from '../utils/api';

export default async function({ params }: { params: any }) {
  try {
    const response = await api.get(`/item/${params.itemId}`);
    const item = response.data.item;
    return { item };
  } catch (error) {
    console.log(error);
    return error;
  }
}
