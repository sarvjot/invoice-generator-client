import api from "../utils/api";
import { redirect } from "react-router-dom";

export default async function createAction() {
  const response = await api.post("/item", {
    name: "New Item" + Date.now(),
    price: 0,
    quantity: 0,
  });
  return redirect(`/item/${response.data.item._id}/edit`);
}
