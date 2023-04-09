import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function(){
  const location = useLocation();
  const bill = location.state.bill;
  console.log(bill);

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
