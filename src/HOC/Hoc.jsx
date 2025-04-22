// import React from 'react'
// const Hoc = (Wrapper) => {
//   const NewCompo = () =>{
//     return <Wrapper sname="Akshay Kumar"/>
//   }
//   return NewCompo
// }
// export default Hoc



// EXAMPLE 2: INCREMENT THE VALUE BY ONE 
import React, { useState } from 'react'

const Hoc = (Wrapper) => {

  let NewCompo = () =>{

    let[count,setCount] = useState(0);

    let increment = ()=>{
      setCount(count+1)
    }

    return <Wrapper simplecounter={{count,increment}} />
     
  }

  return NewCompo;
}

export default Hoc
