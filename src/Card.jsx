// import React from 'react'

// const Card = (props) => {
//     console.log(props)
//     let{addtocard:{product,cost}} = props
//   return (
//     <>
//        <h1>Product {product}</h1>
//        <h1>Cost {cost}</h1>
//     </>
//   )
// }



// Example 2 PROPS DEALLING

// export default Card
// import React from 'react'
// const Card = (props) => {
//   console.log("Cart" , props);

//   let{addtolist,children} = props.addtocart
//   let {item,rating,company} = addtolist
//   let {pname,colors:[c1,c2,c3],price:{p1,p2,p3}} = item
  
//   return (
//     <>
//       <h1>Product : {pname}</h1>
//       <h1>Color available : {c1},{c2},{c3}</h1>
//       <h1>Different price: {p1},{p2},{p3}</h1>
//       <h2>Rating : {rating}</h2>
//       <h2>Company : {company}</h2>
//       {children}
//     </>
//   )
// }
// export default Card



// CONTEXT API 
import React, { useContext } from 'react'
import {ProductApi} from "./context/ProductContext"

const Card = () => {


  // STEP-2 -----> CONTEXT CONSUMER 
  let value = useContext(ProductApi);

  console.log("cart--------->",value);
  


  return (
    <>
      <h1>cart---------{value}</h1>
    </>
  )
}

export default Card


