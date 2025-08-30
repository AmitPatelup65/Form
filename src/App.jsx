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
  return (
    <div className='bg-gray-150 flex justify-center h-158'>

      <form action="" onSubmit={handle} className='   flex flex-col bg-white h-155 w-120 mt-5  rounded-lg shadow-lg shadow-gray-800 '>
        <h1 className='text-3xl font-semiboldbold flex justify-center underline '>Sign Up Form</h1>
        <input className='border-2 bg-blue-50' type="url" placeholder='Paste Your Image Link' onChange={(event)=>setval({...val,image:event.target.value})}/>
        <h1>Enter Your Name</h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, name: event.target.value })} type="text" placeholder='Name' />
        <h1>Enter Your Last Name </h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, lname: event.target.value })} type="text" placeholder='Last Name' />
        <h1>Enter Your E-mail </h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, email: event.target.value })} type="text" placeholder='E-mail' />
        <h1>Enter Your Password </h1>
        <input className=' border-2 mt-1 h-9 rounded bg-blue-50' onChange={(event) => setval({ ...val, pasword: event.target.value })}
          type="password" placeholder='Password' />
        <input onClick={handle} className='bg-blue-500 border-2 mt-5 w-105 ml-6 h-8 rounded-md active:scale-90' type="submit" placeholder='Submit' />
       {cart &&  ( <div className='mt-10 h-50 bg-gray-200 w-50 ml-35 mb-5 rounded-lg flex justify-start shadow-lg shadow-gray-800 flex-col' >
        <img className='h-20 w-20 flex rounded-lg ml-15 border-2' src={cart.image} alt="" />
        <h1 className='mb-2 mt-3 font-semibold'> Name :-{cart.name}</h1>
        <h1 className='mb-2 font-semibold'> Last :-{cart.lname}</h1>
        <h1 className='mb-2 font-semibold'> E-mail :-{cart.email}</h1>
        <h1 className='mb-2 font-semibold'>Password:-{cart.pasword}</h1>
      </div>)}
      </form>
      
    </div>
  )
}

export default App 