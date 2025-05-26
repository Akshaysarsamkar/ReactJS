import React, { memo } from 'react'

const PureChild = (props) => {
    console.log("PureChild is rendering");
    
  return (
    <>
      <h1>PureChild--- {props.stu}</h1>
    </>
  )
}

export default memo(PureChild) 
