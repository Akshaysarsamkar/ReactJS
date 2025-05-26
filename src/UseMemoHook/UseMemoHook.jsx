import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    let[count1,setCount1] = useState(0)

    let[count2,setCount2] = useState(10)


    let even = useMemo(()=>{
        let i =0;
        while(i<1000000000){
            i++;
        }

        return count1%2===0
    },[count1])


  return (
    <> 
        <button onClick={()=>{setCount1(count1+1)}}>Count1-{count1}</button>
        {even ? "Even":"Odd"}
        <button onClick={()=>{setCount2(count2+1)}}>Count2-{count2}</button>
      
    </>
  )
}

export default UseMemoHook
