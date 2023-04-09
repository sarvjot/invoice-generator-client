import { 
  useLoaderData,
  Form,
} from "react-router-dom";

export default function(){
  const { item }: any = useLoaderData();

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
      
      <Form 
        method="GET"
        action="edit"
      >
        <button type="submit">Edit</button>
      </Form>

      <Form 
        method="POST"
        action="delete"
      >
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
