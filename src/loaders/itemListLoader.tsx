import api from '../utils/api';

export default async function itemListLoader() {
  try {
    const response = await api.get('/item');
    const items = response.data.items;
    const trimmedItems = items
      .map((item: any) => {
        return { 
          _id: item._id, 
          name: item.name, 
          price: item.price,
          quantity: item.quantity 
        }
      });

    return { items: trimmedItems };
  } catch (error) {
    console.log(error);
    return error;
  }
}
