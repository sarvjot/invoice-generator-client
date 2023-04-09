import { 
  useLoaderData,
  Link,
  Form,
} from "react-router-dom";

export default function(){
  const { items } : any = useLoaderData();

  return (
    <div>
      <ul>
        { 
          items.map((item: any) => (
            <li key={item._id}>
              <Link 
                to={`/item/${item._id}`}
              >
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </Link>
            </li>
          ))
        }
      </ul>
      <Form 
        action="/item/new"
        method="POST"
      >
        <button type="submit">Create New Item</button>
      </Form>
    </div>
  );
}
