import React, { useEffect, useState } from 'react'
// import useEffectChild from './UseEffectChild';
import UseEffectChild from "./UseEffectChild"

const UseEffectParent = () => {
    let [student,setStudent] = useState("Akshay")
    let[tech,setTech] = useState("Web-tech")

    //ONLY FUNCTION / NO DEPENDENCY-LIST
    useEffect(()=>{
        console.log("effect1-----> equal to componentDidmount and componentDidUpdate")
    })

    // EMPTY DEPENDENCY LIST
    // COMPONENTDIDMOUNT ----> EXECUTE ONLY ONCE 
    useEffect(()=>{
        console.log("effect3-----> equal to componentDidmount")
    },[]) 

    //[value]  WHEN WE DO ANY CHANGES TO THE PASSED VALUE THIS USEEFFECT EXECUTE 
    useEffect(()=>{
        console.log("effect1-----> equal to componentDidUpdate")

    })
    
  return (
    <>
      <h1>{student}</h1>
      {student === "Akshay"?<UseEffectChild/>:<></>}
      <button onClick={()=>{setStudent("Kumar")}}>Change</button>
      <h2>{tech}</h2>
      <button onClick={()=>{setTech("ReactJS")}}>Change</button>
    </>
  )
}

export default UseEffectParent
