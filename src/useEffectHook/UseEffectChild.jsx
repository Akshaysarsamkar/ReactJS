import React, { useEffect } from 'react'

const UseEffectChild = () => {

  useEffect(()=>{
    console.log("Effect4 ----->  equal to componentWillUnmount");
    
},[])

return (
<>
  <h1>I am Child</h1>
</>
)
}

export default UseEffectChild

