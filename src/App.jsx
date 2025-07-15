import { useState, useEffect } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfor from "./Hooks/useCurrencyInfor";
function App() {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");
  const [converted, setConverted] = useState(0);

  const currencyData = useCurrencyInfor(fromCurrency);

  const convert = () => {
    if (!currencyData) return;
    const rate = currencyData[toCurrency];
    setConverted((amount * rate).toFixed(2));
  };

  useEffect(() => {
    convert();
  }, [amount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4"'>
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-5">
        <h1 className="text-2xl font-bold text-center text-blue-900">
          Currency Converter
        </h1>
        <p className="text-center text-sm text-gray-500 mb-4">
          Check live rates, set rate alerts, receive notifications and more.
        </p>
        <div className="bg-white p-4 rounded-lg shadow border border-blue-300">
          <InputBox
            lable="Amount"
            amount={amount}
            onAmountChange={setAmount}
            currencyOptions={Object.keys(currencyData)}
            selectCurrency={fromCurrency}
            onCurrencyChange={setFromCurrency}
          />

          <div className="flex justify-center my-3">
            <button
              onClick={handleSwap}
              className="bg-indigo-700 w-10 h-10 cursor-pointer rounded-full text-white font-bold text-lg flex items-center justify-center"
            >
              swap
            </button>
          </div>
          <InputBox
            lable="Converted Amount"
            amount={converted}
            amountDisable={true}
            currencyOptions={Object.keys(currencyData)}
            selectCurrency={toCurrency}
            onCurrencyChange={setToCurrency}
          />
        </div>

        <p className="text-center text-black font-bold">
          1 {fromCurrency.toUpperCase()} ={" "}
          {currencyData[toCurrency] ? currencyData[toCurrency] : "?"}{" "}
          {toCurrency.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default App;
