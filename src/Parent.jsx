// SENDING MULTIPLE PROP VALUE UNDER SAME PROPNAME 
// import React from 'react'
// import Child from "./Child"
// const Parent = () => {
//     let emp = "Saniks"
//     let sal = 85200
//     let com = "TCS"

//     let role = "Developer"
//     let dept = "FrontDev"
//     let skill = "react"
//   return (
//     <>
//       <Child empInfo={[emp,sal,com]} roleInfo={{role,dept,skill}} />
//     </>
//   )
// }

// export default Parent





// // PROPS-CHILDREN DESTUCTURE AFTER RECEIVING
// import React from 'react'
// import Child from './Child'
// const Parent = () => {
//   return (
//     <>
//       <Child>
//         <h1>Learn Prop-Children</h1>
//         <p>This is a element</p>
//         a am content
//       </Child>
//     </>
//   )
// }
// export default Parent


// // PROPS-CHILDREN DESTUCTURE WHILE RECEIVING

// import React from 'react'
// import Child from "./Child"
// const Parent = () => {
//   return (
//     <>
//       <Child>
//         <h1>Props Children destruturing while receiving</h1>
//         Please Be active In the Session
//       </Child>
//     </>
//   )
// }

// export default Parent


//DEFAULT PROPS
// when sender is not sending any data but in receiver we except some data 
//Note: default props will work only when sender not sending specific prop 
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//       <Child rating={5}/>
//     </>
//   )
// }

// export default Parent


// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//       <Child/>
//     </>
//   )
// }

// export default Parent  



//PROPS ----> IMMUTABLE 

// import React from 'react'
// import Child from './Child';

// const Parent = () => {
//    let role = "Developer"
//   return (
//     <>
//        <Child role={role}/>
//     </>
//   )
// } 

// export default Parent

// SENDING PROPS IN BI-DIRECTIONAL ORDER (TOP----><------BUTTOM)
// import React, { useState } from 'react'
// import Child from './Child';

// const Parent = () => {

//    let[tech,setTech] = useState("webtech")

//    let changeTech = ()=>{
//           setTech("Reactjs")
//    }
//   return (
//     <>
//       <Child info = {{tech,changeTech}} />
//     </>
//   )
// }

// export default Parent


import React, { useState } from 'react'
import MyProfile from './MyProfile';

const Parent = () => {

   let data = {
      iname: "Qspider",
      mode: "online",
      fees: 55000,
      cource: "Full Stack",
      photo: "src/images/qspider.jpg",
      rating: 4.3
   }

   let [Institute, setInstitute] = useState(data);


   let changeRating = ()=>{
        setInstitute(4.3)
   }

   return (
      <>
         <MyProfile info={Institute}>
            <h4 className="mantra">OUR MANTRA IS QUALITY</h4>
            <p>Training to all those Aspiring fro sucessful IT carrer</p>
         </MyProfile>
      </>
   )
}

export default Parent
