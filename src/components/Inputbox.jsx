import React  from 'react'
import { useState, useId } from 'react';

const Inputbox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    // listed all the currencies in the api.
    currencyoptions = [
  'USD', 'EUR', 'GBP', 'JPY', 'AUD', 
  'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 
  'ZAR', 'INR', 'BRL', 'RUB', 'MXN', 
  'SGD', 'HKD', 'NOK', 'TRY', 'KRW'
],
    selectedCurrecy,
    className,  
}) => {

    const [useselectedCurrecy, setuseselectedCurrency] = useState(selectedCurrecy);
    const id = useId();

  return (
  

    <div className='w-11/12  h-28 bg-white my-4 p-2 mx-6'>
    <label htmlFor={id}>{label}</label>
    <br />
    <input 
    type="text"  
    id={id}
    className='h-8 my-2 w-full '
    value={amount} 
    onChange={(e)=>{
        console.log(e.target.value);
        onAmountChange && onAmountChange(Number(e.target.value))}}
    />
    <label htmlFor="currencySelect">Select Currency:</label>
    <select id="currencySelect" name="currency" value={useselectedCurrecy} onChange={(e)=>{
        console.log(e.target.value)
        onCurrencyChange && onCurrencyChange(e.target.value)
        setuseselectedCurrency(e.target.value)
    }}>
    {currencyoptions.map((currency) => (
        <option key={currency} value={currency}>{currency}</option>
    ))}

    </select>

    </div>

    
  )
}

export default Inputbox