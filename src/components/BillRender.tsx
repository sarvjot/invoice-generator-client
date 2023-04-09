import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

export default function(){
  const { bill } : any = useLoaderData();

  useEffect(() => {
    const billDiv = document.getElementById("bill");
    if (billDiv) {
      billDiv.innerHTML = bill;
    }
  }, [bill]);

  return (
    <div id="bill">
    </div>
  );
}
