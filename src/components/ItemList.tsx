import { 
  useLoaderData,
  Link,
  Form,
} from "react-router-dom";

function Cell({ children }: any) {
  return (
    <div className="w-96 flex justify-center items-center gap-2">
      {children}
    </div>
  );
}

function Row({ children, className }: any) { 
  return (
    <div 
      className={`flex justify-around items-center ${className}`}
    >{children}</div>
  );
}

export default function ItemList(){
  const { items } : any = useLoaderData();

  return (
    <div className="pt-12">
      <div className="w-4/5 mx-auto">
        <Row className="text-3xl h-24 text-paynes-grey">
          <Cell>Item Name</Cell>
          <Cell>Price</Cell>
          <Cell>Quantity</Cell>
        </Row>
        { 
          items.map((item: any) => (
            <Row key={item._id} className="text-xl h-8">
              <Link 
                to={`/item/${item._id}`}
                className="text-munsell"
              >
                <Cell>
                  {item.name}
                  <img src="/link.png" className="inline w-3 h-3" />
                </Cell>
              </Link>
              <Cell>₹{item.price}</Cell>
              <Cell>{item.quantity}</Cell>
            </Row>
          ))
        }
        <Form 
          action="/item/new"
          method="POST"
          className="flex justify-center pt-12"
        >
          <button 
            type="submit"
            className="bg-munsell text-cream text-xl w-64 h-12 border-2 border-munsell rounded-xl"
          >
            Create New Item
          </button>
        </Form>
      </div>
    </div>
  );
}
