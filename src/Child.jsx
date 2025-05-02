// import React from 'react'

// const Child = () => {
//     return (
//         <>
//             <h1>I Am Child</h1>
//             <h2>How are You</h2>
//         </>
//     )
// }


// export default Child 
// import React from 'react';
// const Child = (props)=>{
//     console.log(props) // OBJ
//     return(
//         <>
//            <h1>Student Name: {props.student}</h1>
//            <h2>Student ID: {props.sid}</h2>
//            <h3>Graduate: {props.bool ? "Yes" : "No"}</h3>  
//         </>
//     )
// }
// export default Child



// import React from 'react';

// const Child = (props) => {


//     console.log(props);
    

//     let { name, salary, job } = props

//     return (
//         <>
//             <h1>Employee Name is: {name} and salary is {salary} working as {job ? "Developer" : "Testing"}</h1>
//         </>
//     )
// }

// export default Child


// WAY2 : DESTRUTURING OF PROPS WHILE RECEIVING 
// import React from "react";
// const Child = ({student,salary,job})=>{

//     return(
//         <>
//         <h1>Name: {student}</h1>
//         <h2>salary: {salary}</h2>
//         <h3>job {job ? "Front-end" : "Back-End"}</h3>
//         </>
//     )

// }

// export default Child 


// // ARRAY DESTRUCTUREING 

// import React from "react";
// const Child = (props)=>{
//     let[d1,d2,d3] = props.dev
//     let[e1,e2,e3] = props.emp
//     console.log(props)
//     return(
//         <>
//         <ul>
//             <li>{d1}</li>
//             <li>{d2}</li>
//             <li>{d3}</li>
//         </ul>
//         <ol>
//             <li>{e1}</li>
//             <li>{e2}</li>
//             <li>{e3}</li>
//         </ol>
//         </>
//     )
// }
// export default Child 


// // SENDING "OBJECT" AS THE PROP VALUE 
// import React from 'react'

// const Child = (props) => {
//     console.log(props)
//     let{movie:{cinema,hero},player:{name,sport}} = props
//   return (
//     <>
//     <h1>Hero of {cinema} is {hero}</h1>
//     <h1>{name} plays {sport}</h1>
    
//     </>
//   )
// }

// export default Child 


// // SENDING MULTIPLE PROP VALUE UNDER SAME PROPNAME 
// import React from 'react'

// const Child = (props) => {

//   console.log(props)

//   let{empInfo:[emp,sal,com], roleInfo:{role,dept,skill}} = props


//   return (
//     <>
//       <h1>name of employee is {emp} working an {com} and earning {sal}</h1>
//       <h1>Role: {role}</h1>
//       <h1>Department: {dept}</h1>
//       <h1>Skill : {skill}</h1>
//     </>
//   )
// }
// export default Child

//SENDING MULTIPLE PROP VALUE UNDER SAME PROPNAME 
// export default Child


// // PROPS-CHILDREN
// import React from 'react'
// const Child = (props) => {
//   return (
//     <>
//       {props.children}
//     </>
//   )
// }
// export default Child

// // PROPS-CHILDREN DESTUCTURE WHILE RECEIVING
// import React from 'react'
// const Child = ({children}) => {
//   console.log(children);
  
//   return (
//     <>
//       {children}
//     </>
//   )
// }
// export default Child



// //DEFAULT PROPS
//    // Way1
// import React from 'react'

// const Child = (props) => {

//   let{rating=5,cost=45200,item="Mobile"}=props
//   return (
//     <>
//        <h1>Rating of {item} is {rating}/5 and cost is {cost}</h1>
//     </>
//   )
// }

// export default Child


// WAY-2
// import React from 'react'

// const Child = (props) => {
//   let{student,Sid}=props
//   return (
//     <>
//       <h1>Student: {student || "Akshay"}</h1>
//       <h1>Student Id: {Sid || 10}</h1>
//     </>
//   )
// }

// export default Child

// PROPS -------> IMMUTABLE 
// import React from 'react'

// const Child = (props) => {
//    console.log(props)
//    props.role = "Analyst"
//   return (
//     <>
//       <h1>{props.role}</h1>
//     </>
//   )
// }

// export default Child

// // SENDING PROPS IN BI-DIRECTIONAL ORDER (TOP----><------BUTTOM)
// import React from 'react'

// const Child = (props) => { 
//    console.log(props);

//    let{info:{tech,changeTech}}= props   
//   return (
//     <>
//       <h1>{tech}</h1>
//       <button onClick={changeTech}>By clicking BTN in Child Changing content on parent</button>
//     </>
//   )
// }

// export default Child


