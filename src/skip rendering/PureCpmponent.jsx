import React, { useState } from 'react'
import NormalChild from './NormalChild';
import PureChild from './PureChild';

const PureCpmponent = () => {

    let[student,setStudent] = useState({
       sname:"Nikita"
    })

    console.log("PureParent is rendering");
    

  return (
    <>
      <h1>Pureparent {student.sname}</h1>
      <NormalChild stu={student.sname}/>
      <PureChild stu={student.sname}/>
      <button onClick={()=>{setStudent({sname:"Akshay"})}}>Change</button>
    </>
  )
}

export default PureCpmponent
