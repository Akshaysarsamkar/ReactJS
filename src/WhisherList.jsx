// import React from 'react'
// import Card from "./Card"
// const WhisherList = (props) => {

//   return (
//     <>
//        <Card addtocard= {props}/>
//     </>
//   )
// }

// export default WhisherList


// // Example 2 PROPS DEALLING 

// import React from 'react'
// import Card from './Card';

// const WhisherList = (props) => {

//   console.log("WhisherList",props);
  
//   return (
//     <>
//       <Card addtocart = {props}/>
//     </>
//   )
// }

// export default WhisherList

import React, { useContext } from 'react'
import { ProductApi } from './context/ProductContext';


const WhisherList = () => {

  // STEP3 : CREATE CONSUMER
  let value = useContext(ProductApi); 

  console.log("WhhisherList---------->",value);
  

  return (
    <>
      <h1>WhisherList -------- {value}</h1>
    </>
  )
}

export default WhisherList
