
// PROPS DRAGLLING 

// import React from 'react'
// import WhisherList from "./WhisherList"
// const Product = () => {
//   return (
//     <>
//       <WhisherList product="Laptop" cost={89999}/>
//     </>
//   )
// }

// export default Product




 // Example 2 PROPS DEALLING 

import React from 'react'
import WhisherList from './WhisherList';

const Product = () => {
  let item = {
    pname:"Pen",
    colors:["Green","blue","red"],
    price:{
      p1:10,
      p2:20,
      p3:45
    }
  }

  let rating = 3.5
  let company = "cello"

  return (
    <>
    <WhisherList addtolist={{item,rating,company}}>
      <h4>Extra marks fro good handwrittin</h4>
      <p>Water proof and long lasting</p>
      </WhisherList>
    </>
  )
}

export default Product

