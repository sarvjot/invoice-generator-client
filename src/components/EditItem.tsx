import { 
  Form,
  useNavigate,
  useLoaderData,
} from "react-router-dom";

export default function EditContact() {
  const { item }: any = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="POST">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={item.name}
      />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        defaultValue={item.price}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        id="quantity"
        name="quantity"
        type="text"
        defaultValue={item.quantity}
      />
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => { navigate(-1); }}>Cancel</button>
      </p>
    </Form>
  );
}
