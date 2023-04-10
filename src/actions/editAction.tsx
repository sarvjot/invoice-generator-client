import api from "../utils/api";
import { redirect } from "react-router-dom";

export default async function editAction({ request, params }: { request: any; params: any }) {
  const formData = await request.formData();
  let updates = Object.fromEntries(formData);
  await api.put(`/item/${params.itemId}`, updates);
  return redirect(`/item/${params.itemId}`);
}
