import api from "../utils/api";
import { redirect } from "react-router-dom";

export default async function() {
  const response = await api.post("/item", {});
  return redirect(`/item/${response.data.item._id}/edit`);
}
