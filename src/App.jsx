import React from 'react'
import Inputbox from './components/Inputbox'

const App = () => {
  return (


   <div className='w-full h-screen flex  justify-center items-center  flex-wrap bg-cover bg-no-repeat'
   style={{backgroundImage: `url(https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=800)`}}>

   
   <div className='w-2/5 h-2/5 bg-red-200   '>
   {/* <h1 className='bg-red-200 text-2xl'>Currency converter</h1> */}
    <Inputbox label='From' selectedCurrecy='USD' />
    <Inputbox  label= 'To' selectedCurrecy='INR'/>
   </div>

   </div> 
    
  )
}

export default App
