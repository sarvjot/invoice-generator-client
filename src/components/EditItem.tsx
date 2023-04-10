import { 
  Form,
  useNavigate,
  useLoaderData,
} from "react-router-dom";

function FormInput({ name, label, defaultValue }: { name: string; label: string; defaultValue: string }) {
  return (
    <div className="flex justify-around items-center h-16">
      <label 
        htmlFor={name}
        className="text-3xl w-32"
      >{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        className="w-96 h-12 border rounded-xl text-center"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}

export default function EditItem() {
  const { item }: any = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form 
      method="POST"
      className="w-2/5 mx-auto"
    >
      <div className="flex flex-col mt-28">
        <FormInput name="name" label="Name" defaultValue={item.name.startsWith('New Item') ? '' : item.name} />
        <FormInput name="price" label="Price" defaultValue={item.price} />
        <FormInput name="quantity" label="Quantity" defaultValue={item.quantity} />
      </div>
      <div className="flex justify-center gap-8 pt-12">
        <button
          type="submit"
          className="bg-munsell text-cream text-xl w-32 h-12 border-2 border-munsell rounded-xl"
        >
        Save
        </button>

        <button
          type="button"
          className="bg-munsell text-cream text-xl w-32 h-12 border-2 border-munsell rounded-xl"
          onClick={() => { navigate(-1); }}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}
