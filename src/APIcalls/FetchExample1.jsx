import React, { useEffect, useState } from 'react'

const FetchExample1 = () => {


    let[jokes,setJokes] = useState()

    let getApi = async()=>{
        let responcApi = await fetch("https://fakestoreapi.cpom/product") 
        // console.log(responcApi);

        let data =await responcApi.json()
        console.log(data);
        

        
    }

    useEffect(()=>{
          try {
            getApi()
          } catch (error) {
            console.log(error);
            
          }
    },[])

  return (
    <>

      xcvxcvx
    </>
  )
}

export default FetchExample1
