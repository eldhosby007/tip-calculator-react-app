import { useState } from "react";

export default function App() {
  const [billValue, setBillValue] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const totValue = billValue * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBillValue("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <BillInput billValue={billValue} setBillValue={setBillValue}></BillInput>
      <SelectPercentage tip={tip1} setTip={setTip1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </SelectPercentage>
      {billValue > 0 && (
        <>
          <Output billValue={billValue} totValue={totValue}></Output>
          <Reset handleReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}

function BillInput({ setBillValue, billValue }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        id="bill"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      ></input>
    </div>
  );
}
function SelectPercentage({ children, setTip, tip }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ billValue, totValue }) {
  return (
    <h3>
      You Pay ${billValue + totValue} (${billValue} + ${totValue} tip)
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
