// import React, { useState } from 'react'

// function Inputed() {
//     const [val,setVal] = useState("")
//   return (
//     <div>
       
//        <p>WELCOME Mr./Ms: {val}</p>

//        <input type='text' onChange={(e) =>setVal(e.target.value)}/>
//     </div>
//   )
// }

// export default Inputed



import React, { useState } from 'react'

function Inputed() {
    const [inp, setInp]=useState("")

    const handleSubmit=()=>{

    }
  return (
    <div>
    <h5>Create Account</h5>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter name' onChange={(e)=>setInp(e.target.value)}/>
        <input type='email' placeholder='enter email' onChange={(e)=>setInp(e.target.value)}/>
        <input type='password' placeholder='enter password' onChange={(e)=>setInp(e.target.value)}/>
        <button type='submit' value="">Register</button>
      </form>
    </div>
  )
}

export default Inputed


