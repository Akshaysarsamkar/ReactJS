import React, { Fragment, useEffect, useState } from 'react'

const FetchMethod = () => {

let [product,setProduct] = useState([])

let getApi = async()=>{
    let responceObj = await fetch("https://fakestoreapi.com/products")

    let data = await responceObj.json()

    setProduct(data)
}

console.log("State",product)

useEffect(()=>{
   try{
       getApi()
   }catch(e){
       console.log(e);
       
   }
},[])

  return (
    <>

    {product.map((val)=>{

       console.log("current value " , val);

       return(
        <Fragment key={val.id}>
            <section>
                <h1>Title : {val.title}</h1>
                <img src={val.image} alt="" height="250px" width="250px" />
                <h2>Price: {val.price}</h2>
                <h2>category: {val.category}</h2>
                {val.description}
            </section>
        </Fragment>
       )
       
    })}
      
    </>
  )
}

export default FetchMethod
