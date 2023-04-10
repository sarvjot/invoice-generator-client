import {
  useLoaderData,
  Form,
} from "react-router-dom";
import Select from "react-select";
import { useState } from "react";

function initRemainingItems(items: any) {
  if (!items) {
    return [];
  }
  return items.map((item: any, index: number) => {
    return {
      value: item,
      label: item.name,
      selected: (index === 0) ? true : false,
    };
  })
}

function Cell({ children, className }: any) {
  return (
    <div className={`w-72 flex justify-start items-center ${className}`}>
      {children}
    </div>
  );
}

function Row({ children, className }: any) { 
  return (
    <div 
      className={`flex justify-between items-center ${className}`}
    >{children}</div>
  );
}

export default function BillForm(){
  const { items } : any = useLoaderData();
  const [remainingItems, setRemainingItems] = useState(initRemainingItems(items));

  return (
    <div
      className="w-4/5 mx-auto"
    >
      <Form 
        method="POST"
      >
        <div className="flex items-center justify-center gap-16 my-12">
          <p
            className="text-3xl text-paynes-grey"
          >
            Customer Name
          </p>
          <input  
            type="text"
            name="clientName"
            className="w-96 h-12 border rounded-xl text-center text-xl"
          />
        </div>
        {
          remainingItems.length < items.length &&
          <Row className="text-3xl h-24 text-paynes-grey">
            <Cell>Item Name</Cell>
            <Cell>Quantity</Cell>
            <Cell>Discount(%)</Cell>
            <div
              className="w-32 flex justify-end items-center"
            ></div>
          </Row>
        }
        {
          items.filter((item: any) => {
            return !remainingItems.find((remainingItem: any) => remainingItem.value._id === item._id)
          }).map((item: any) => (
            <Row key={item._id} className="text-xl h-10 text-munsell">
              <Cell>
                {item.name}
              </Cell>
              <Cell>
                <input
                  type="text"
                  name={`quantity-${item._id}`}
                  className="w-32 h-8 border rounded-md text-center"
                />
                /{item.quantity}
              </Cell>
              <Cell>
                <input
                  type="text"
                  name={`discount-${item._id}`}
                  className="w-32 h-8 border rounded-md text-center"
                />
              </Cell>
              <div
                className="w-32 flex justify-end items-center"
              >
                <button
                  type="button"
                  className="bg-munsell text-cream text-lg w-32 h-9 border-2 border-munsell rounded-lg"
                  onClick={() => {
                    setRemainingItems(
                      [
                        ...remainingItems,
                        {
                          value: item,
                          label: item.name,
                          selected: false,
                        }
                      ].map((remainingItem: any, index: number) =>
                        ({ ...remainingItem, selected: (index === 0) ? true : false })
                      )
                    );
                  }}
                >Remove</button>
              </div>
            </Row>
          ))
        }
        {
          remainingItems.length > 0 &&
          <div
            className="mt-12 flex flex-row gap-4 justify-between items-center"
          >
            <Select
              options={remainingItems}
              value={remainingItems.find((item: any) => item.selected)}
              onChange={(choosenItem: any) => {
                setRemainingItems(
                  remainingItems.map((remainingItem: any) => ({
                    ...remainingItem,
                    selected: (remainingItem.value._id === choosenItem.value._id) ? true : false,
                  }))
                );
              }}
              className="h-10 w-3/5"
              isSearchable={true}
              isClearable={true}
            />
            <button 
              type="button"
              className="bg-munsell text-cream text-lg w-32 h-9 border-2 border-munsell rounded-lg"
              onClick={() => {
                setRemainingItems(
                  remainingItems
                    .filter((remainingItem: any) => !remainingItem.selected)
                    .map((remainingItem: any, index: number) => 
                      ({ ...remainingItem, selected: (index === 0) ? true : false })
                    )
                );
              }}
            >Add item</button>
          </div>
        }
        <button 
          type="submit"
          className="bg-munsell text-cream text-xl w-40 h-10 border-2 border-munsell rounded-xl block mx-auto mt-10"
        >
          Create bill
        </button>
      </Form>
    </div>
  );
};


