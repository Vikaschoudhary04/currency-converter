import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 font-semibold text-lg"
          type="Number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-end items-end">
      <p className="text-black/40 mb-2">Currency</p>
        <div className="flex items-center gap-2">
    <img
      src={`https://flagcdn.com/48x36/${selectCurrency.slice(0, 2).toLowerCase()}.png`}
      alt={selectCurrency}
      className="w-6 h-6 rounded-full"
    />

      <select className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
      value={selectCurrency} onChange={(e) =>{
        onCurrencyChange && onCurrencyChange(e.target.value)
        
      }}>

         {currencyOptions.map((currency) =>(
            <option key={currency} value={currency}>
                
                {currency.toUpperCase()}

            </option>
         ))}

      </select>
        
      </div>
      </div>
    </div>
  );
}

export default InputBox;
