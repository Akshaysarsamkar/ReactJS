// If Else way
import React from 'react'
const ConditionalRendring = () => {

    let age = 77;

    if(age >= 18 )
        return <h1>Eligible for vote</h1>
    else
        return <h1>Not Eligible for vote</h1>
    
    
}
export default ConditionalRendring 


// Ternary Operator 
// import React from 'react'
// const ConditionalRendring = () => {
//     let mood = "Happy"
//   return (
//     <>
//       <h1>{mood === "Happy" ? "😄😃😄😊":"😂🤣😥😣😏"}</h1>
//     </>
//   )
// }
// export default ConditionalRendring



// // Short circute Way
// import React from 'react'

// const ConditionalRendring = () => {
//     let greet = "hii"
//   return (
//     <>
//       <h1>{greet === "hi" && "How are You"}</h1>
//     </>
//   )
// }

// export default ConditionalRendring

//TASK1 USING CONDITIONAL REDRING
// import React, { useState } from 'react'

// const ConditionalRendring = () => {

//     let [follow,setFollow] = useState(false);

//     let toggle = ()=>{
//         setFollow(!follow)
//     }

//   return (
//     <>
//        <h1>{ follow ? "unfollow" : "following" }</h1>
//        <button onClick={toggle}>{follow ? "follow":"unfollow"}</button>
//     </>
//   )
// }

// export default ConditionalRendring
