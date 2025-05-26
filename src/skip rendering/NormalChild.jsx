import React from 'react'

const NormalChild = (props) => {
    console.log("Normal Child is rendering");
    
  return (
    <>
      <h1>Normal child {props.stu}</h1>
    </>
  )
}

export default NormalChild
