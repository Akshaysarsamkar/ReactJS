// import React,{Component} from "react"

// class MyProfile extends Component{
//     render(){
//         return <h1>Akshaykumar sarsamkar</h1>
//     }
// }

// export default MyProfile

// import React,{Component} from "react"

// const MyProfile = ()=>{
//     return <h3>Java Fullstack Developer</h3>
// }

// export default MyProfile


// import React from 'react'
// import Style from './task.module.css'
// const MyProfile = (props) => {
//     console.log(props)
//     let{info:{iname,mode,fees,cource,photo,rating=0,duration=4},children} = props 
//   return (
//     <>
//       <h1 className={Style.iname}> {iname}</h1>
//       <img src={photo} alt={iname} />
//       <h3>Mode: {mode}</h3>
//       <h3>Cource: {cource}</h3>
//       <h3>Fees: RS.{fees}</h3>
//       <h3>Rating: {rating}/5</h3>
//       <h3>duration: {duration} Month</h3>
//       {children}
//     </>
//   )
// }

// export default MyProfile


// CONTEXT API EXAMPLE 2
import React, { useContext } from 'react'
import { ProfileApi } from './context/ProfileContext'
const MyProfile = () => {
    let data = useContext(ProfileApi)
    let{employee,salary,company,changeCompany} = data
    console.log(data)
  return (
    <>
       <h1>{employee} is currently working {company}</h1>
       <h2>Sal: {salary}</h2>
       <button onClick={changeCompany}>Shift Company</button>
    </>
  )
}
export default MyProfile

