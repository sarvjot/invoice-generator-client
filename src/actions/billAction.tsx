import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export default async function({ request }: { request: any }) {
  try {
    const formData = await request.formData();
    const data : { [key: string]: string } = Object.fromEntries(formData);
    let items : { [key: string]: { [key: string]: number } } = {};

    const clientName = data.clientName;

    for (const key in data) {
      const value = data[key];

      if (key !== "clientName" && value !== "") {
        const [type, id] = key.split("-");
        if (!items[id]) {
          items[id] = {};
        }
        items[id][type] = parseInt(value);
      }
    }

    const itemsArray = Object.entries(items).map(([key, value]) => ({
      _id: key,
      ...value
    }));

    const response = await api.post("/bill", { clientName: clientName, products: itemsArray });
    navigate("/bill/render", { state: { bill: response.data } });
  } catch (error) {
    console.log(error);
    return error;
  }
}
