import React, { createContext } from 'react'
import Card from './../Card';
import WhisherList from './../WhisherList';

// CONTEXT API 
//? STEP1 : CREATE CONTEXT 

export let ProductApi = createContext();
const ProductContext = () => {

   // STEP2 : CONTEXT PROVIDER ----> WRAP THE CONSUMER COMPONENT BY CONTEXT DECLARE 
  return (
    <ProductApi.Provider value="sending the String using the context Api"> 
       <Card/>
       <WhisherList/>
    </ProductApi.Provider>
  )
}

export default ProductContext
