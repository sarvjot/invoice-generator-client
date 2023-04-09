import { redirect } from "react-router-dom";
import api from '../utils/api';

export default async function({ params }: { params: any }) {
  await api.delete(`/item/${params.itemId}`);
  return redirect('/items');
}
