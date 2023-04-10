import { useEffect } from "react";

export default function BillRender(){
  useEffect(() => {
    const bill = localStorage.getItem("bill");
    const billDiv = document.getElementById("bill");
    if (bill && billDiv) {
      billDiv.innerHTML = bill;
    }
  }, []);

  return (
    <div id="bill">
    </div>
  );
}
