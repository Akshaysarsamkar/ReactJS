import React, { useEffect, useState } from 'react'

const Example = () => {
   let[toggle,setToggle] = useState(false)

   useEffect (()=>{
    if(toggle)
        document.title = "ReactJs"
    else 
        document.title = "WebTech"

    console.log("UseEffect is calling---> toggle is targetted");
    
   })
  return (
    <>
       <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
    </>
  )
}



export default Example
