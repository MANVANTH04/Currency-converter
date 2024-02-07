import React,{useState} from 'react'
import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedamount, setConvertedamount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert= () =>{
    setConvertedamount(amount*currencyInfo[to])
  }

  const swap = ()=>{
    setTo(from)
    setFrom(to)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }
  
  
  
  
  

  return (


   <div className='w-full h-screen flex  justify-center items-center  flex-wrap bg-cover bg-no-repeat'
   style={{backgroundImage: `url(https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=800)`}}>

   <div className='w-full'>
   <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
    <form method="post" onSubmit={(e)=>{
      e.preventDefault()
      convert()
    }} >
    <div className='w-full mb-1'>
    <Inputbox label='From'
    amount = {amount}
    currencyoptions={options}
    onCurrencyChange={(currency)=>setFrom(currency)}
    onAmountChange={(amount)=>setAmount(amount)}
      selectedCurrecy={from}
    />

    </div>
    <div className='relative w-full h-0.5'>
      <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2
      border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 '
      onClick={swap}>Swap</button>
    </div>
    <div className='w-full mb-1'>
    <Inputbox
    label="To"
    amount={convertedamount}
    currencyoptions={options}
    onCurrencyChange={(currency) => setTo(currency)}
    onAmountChange={(amount) => setConvertedamount(amount)} 
    selectedCurrecy={to}
  />

    </div>
    <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
      Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
    </form>
    </div>
    </div>

   </div> 
    
  )
  }

export default App




