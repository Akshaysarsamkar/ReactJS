import React from 'react'
import { useNavigate } from 'react-router-dom'

const Setting = () => {

    let navigate =useNavigate()

    return (
        <>

            <h1>Setting</h1>
            <button onClick={()=>{navigate("/")}}>Go to Home</button>
            <button onClick={()=>{navigate("/manu")}}>Go to Manu</button>
            <button onClick={()=>{navigate(-1)}}>Go to Back</button>
        </>
    )
}

export default Setting
