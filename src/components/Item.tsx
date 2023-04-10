import { 
  useLoaderData,
  Form,
} from "react-router-dom";

function ItemData({ value, label }: { value: string; label: string; }) {
  return (
    <div className="flex justify-around items-center h-16">
      <div className="text-3xl w-32">{label}</div>
      <div className="w-96 h-12 text-2xl flex justify-center items-center text-munsell">{value}</div>
    </div>
  );
}

export default function Item(){
  const { item }: any = useLoaderData();

  return (
    <div className="w-2/5 mx-auto">
      <div className="flex flex-col mt-28">
        <ItemData value={item.name} label="Name" />
        <ItemData value={item.price} label="Price" />
        <ItemData value={item.quantity} label="Quantity" />
      </div>
      
      <div className="flex justify-center gap-8 pt-12">
        <Form 
          method="GET"
          action="edit"
        >
          <button 
            type="submit"
            className="bg-munsell text-cream text-xl w-32 h-12 border-2 border-munsell rounded-xl"
          >Edit</button>
        </Form>

        <Form 
          method="POST"
          action="delete"
        >
          <button 
            type="submit"
            className="bg-munsell text-cream text-xl w-32 h-12 border-2 border-munsell rounded-xl"
          >Delete</button>
        </Form>
      </div>
    </div>
  );
}
