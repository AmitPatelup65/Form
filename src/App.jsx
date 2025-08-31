import React, { useRef, useState } from 'react'
function App() {
  const[val, setval] = useState({
    name: " ",
    lname: " ",
    email: " ",
    pasword: " ",
    image: ""

  })
const [cart, setcart] = useState(null)

  console.log(val);
  const handle = (event) => {
    event.preventDefault()
    setcart(val)
  }
  const handleremve=()=>{
    setcart(null)
  }
  return (
    <div className='bg-gradient-to-r from-[#ffa5ab] flex justify-center h-158 flex-col items-center'>

      <form action="" onSubmit={handle} className='   flex flex-col bg-gradient-to-r from-[#f9dbbd] h-100 w-80 mt-5  rounded-lg shadow-lg shadow-gray-800'>
       
        <h1 className='text-3xl font-semiboldbold flex justify-center underline mb-2'>Sign Up Form</h1>
         <h1 className='mb-2 '>Enter Your Image Link</h1>
        <input className='border-2 bg-blue-50 mb-2' type="url" placeholder='Paste Your Image Link' onChange={(event)=>setval({...val,image:event.target.value})}/>
        <h1>Enter Your Name</h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, name: event.target.value })} type="text" placeholder='Name' />
        <h1>Enter Your Last Name </h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, lname: event.target.value })} type="text" placeholder='Last Name' />
        <h1>Enter Your E-mail </h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, email: event.target.value })} type="text" placeholder='E-mail' />
        <h1>Enter Your Password </h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, pasword: event.target.value })}
          type="password" placeholder='Password' />
        <input onClick={handle} className='bg-blue-500 border-2 mt-3 mb-2 w-50 ml-12 h-8 rounded-md active:scale-90' type="submit" placeholder='Submit' />
      
      </form>
       {cart ?  ( <div className='mt-10 h-50 bg-gray-200 w-50  mb-5 rounded-lg flex justify-start shadow-lg shadow-gray-800 flex-col' >
        <img className='h-20 w-20 flex rounded-lg ml-15 ' src={cart.image} alt="" />
        <h1 className='mb-2 mt-3 font-semibold'>{cart.name}</h1>
        <h1 className='mb-2 font-semibold'>{cart.lname}</h1>
        <h1 className='mb-2 font-semibold'> {cart.email}</h1>
        <h1 className='mb-2 font-semibold'>{cart.pasword}</h1>
        <button className='border-2 bg-red-300 w-30 ml-10 rounded-lg' onClick={handleremve}>Remove</button>
      </div>):null}
    </div>
  )
}

export default App 