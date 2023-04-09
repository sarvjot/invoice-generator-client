import {
  useLoaderData,
  Form,
} from "react-router-dom";

export default function(){
  const { items } : any = useLoaderData();

  return (
    <div>
      <Form 
        method="POST"
      >
        <label>
          Customer Name
          <input  
            type="text"
            name="clientName"
          />
        </label>
        {
          items.map((item: any) => (
            <div
              key={item._id}
            >
              <label>
                {item.name}
                <input
                  type="text"
                  name={`quantity-${item._id}`}
                />
                /{item.quantity}
              </label>

              <label>
                Discount
                <input
                  type="text"
                  name={`discount-${item._id}`}
                />
              </label>
            </div>
          ))
        }
        <button type="submit">Create bill</button>
      </Form>
    </div>
  );
};
