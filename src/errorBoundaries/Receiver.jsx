import React from "react"

const Receiver = (props)=>{
     console.log(props);

     let {money} = props

     if(money >= 40000){
        throw new Error("server is busy............")
     }
     
    return (
        <>
            <h1>Transactoion of RS {money}</h1>
        </>
    )

}

export default Receiver