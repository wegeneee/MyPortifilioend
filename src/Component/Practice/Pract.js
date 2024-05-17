

import React, { useState } from 'react'

function Pract() {
    const [val,setVal] = useState("hi")
    const isGreen= true

    const age =132;
   
  return (
    <div>
      {age >18 ? <h2 >it is over</h2> : <p>under</p>}
      <h2 style={{color: isGreen? "green": "red"}}>this is the color</h2>

      
    </div>
  )
}

export default Pract
