// this is a component file 

// 1] CLASS BASED COMPONENT(CBC) / stateFull component 
//     in class based component render() is must 
//     

// import React, from 'react'

// class App extends Component{
//     render(){
//         return <h1>CBC</h1>
//     }
// }
// export default App


// 2] FUNTIONAL BASED COMPONENT 
// IN functional baed component render function is not needed 


// import React,{Component} from "react"
// const App = () => {
//     return <h1>FBC</h1>
// }

// export default App


// JSX first Rule -> 

// const App = ()=>{
//     return (
//         <>
//             <h1>Hi Hello</h1>
//             <h2>Learn ReactJS</h2>
//         </>
//     )
// }




// const App = () => {
//     let student = 'Akshay'
//     let sid = 458
//     return (<>
//         <h1>Student Name: {student}, Stu Id: {sid}</h1>
//         <h1>Leaning JSX</h1>
//         <p>returing multiple element</p>
//         <br />
//         <hr />
//         <label htmlFor="uname">User Name:</label>
//         <input id="uname" type="text" />
//         <p>it will work but not recommanded to write in paired tag we can not write content inside that </p>
//         <br></br>
//         <hr></hr>
//         <input></input>

//     </>
//     )
// }

// export default App


// add child other component inside main component 
// import React from 'react'
// import Child from './Child'

// const App = ()=>{
//     return (
//         <>
//         <p>I am App</p>
//         <Child/>
//         </>
//     )
// }
// export default App




// APPLY CSS

// 1] INLINE CSS 
// import React from "react";

// const App = () => {
//     let circle = {
//         height:"450px",
//         width:"450px",
//         borderRadius:"100%",
//         backgroundColor:"green",
//         margin:"0 auto"
//     }
//     return (
//         <>
//            <h1 style={{color:"red",textAlign:"center"}}>Inline Css</h1>
//            <div style={circle}></div>
//         </>
//     )
// }

// export default App


// // 2] GLOBAL CSS 
// import React from "react";

// const App = () => {

//     return (
//         <>
//             <h3 id="head">Global Css</h3>
//             <button className="btn">Show me</button>
//             <img src="https://thumbs.dreamstime.com/b/vector-illustration-icon-react-programming-language-vector-illustration-icon-react-programming-language-251938374.jpg" alt="Logo" className="img"/>
//         </>
//     )

// }

// export default App


// // 3] MODULE CSS
// import React from "react";
// import Header from "./modulecss/Header"

// const App = ()=>{
//     return(
//         <>
//         <Header/>
//         </>
//     )
// }

// export default App


// // PROPS IN REACT 
// import React from "react"
// import Child from "./Child"
// const App = () => {
//     return (
//         <>
//             <Child student="Akshay" sid={1} bool={true}/>
//         </>
//     )
// }

// export default App


// // USING DESTRUCTURING 
// import React from "react"
// import Child from "./Child"
// const App = () => {
//     return (
//         <>
//             <Child student="Kumar" salary={78500} job={false}/>
//         </>
//     )
// }
// export default App


// // ARRAY DESTRUCTING
// import React from "react";
// import Child from "./Child"
// const App = () => {
//     let dev = ["Sam","Ram","Sham"]
//     return (
//         <>
//             <Child emp={["Sanjay","Manoj","Anil"] }dev={dev}/>
//         </>
//     )
// }
// export default App 



// // SENDING "OBJECT" AS THE PROP VALUE 

// import React from 'react'
// import Child from './Child'

// const App = () => {
//     let player ={
//         name:"Virat",
//         sport:"Cricket"
//     }
//     return (
//         <>
//             <Child movie={{cinema:"KGF",hero:"Yash"}} player={player}/>
//         </>
//     )
// }

// // export default App 
// import React from 'react'
// import Parent from './Parent'
// const App = () => {
//   return (
//      <Parent/>
//   )
// }

// export default App



// import React,{Fragment} from 'react'
// import ProductContext from './context/ProductContext'
// import ProfileInfo from "./ProfileInfo"
// import Parent from "./Parent" 
// import ProfileContext from './context/ProfileContext'
// import CompoOne from './HOC/CompoOne'
// import CompoTwo from './HOC/CompoTwo'
// import Product from "./Product"
// import ConditionalRendring from './ConditionalRendring';
// import ToggleTheme from './task/ToggleTheme';
// import "./global.css"
// import UncontrolledForm from './form/UncontrolledForm'
// import ControlledForm from './form/ControlledForm'
// import LifeCycleParent from './lifeCycle/LifeCycleParent'
// import Reference from './Reference';
// import VideoReference from './task/VideoReference';
// import Example from './useEffectHook/Example';
// import UseEffectParent from './useEffectHook/UseEffectParent';




// const App = () => {
//   let students = ["Akshay","sanika","Priya","Akshay"]
//   return (
//     <>
//          {students.map((val,ind)=>{
//           console.log("value" , val , "index",ind);

//           return(
//             <Fragment key={ind}>
//               <ul>
//                 <li>{val}</li>
//               </ul>
//             </Fragment>
//           )

//          })}
//     </>
//   )
// }

// export default App


// import React from 'react'
// // import AxiosWay from './APIcalls/AxiosWay'
// // import PureCpmponent from './skip rendering/PureCpmponent'
// // import UseMemoHook from './UseMemoHook/UseMemoHook'
// // import ErrorBoundary from './errorBoundaries/ErrorBoundary'
// // import Sender from './errorBoundaries/Sender'
// // import UserInfo from './errorBoundaries/UserInfo'
// // import FetchMethod from './APIcalls/FetchMethod';
// // import FetchExample1 from './APIcalls/FetchExample1';

// const App = () => {
//   return (
//     <>
//       <Sender/>
//     </>
//   )
// }

// export default App



// ROUTING CONCEPt

// import React from 'react'
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'


// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>

//           <Route path='/' element={<h1>Home page</h1>}/>
//           <Route path="/manu" element={<h1>Manu page</h1>}/>
//           <Route path="/setting" element={<h1>Setting</h1>}/>
//           <Route path="*" element={<h1>Page not Found</h1>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import Home from './routing/Home';
// import Manu from './routing/Manu';
// import Setting from './routing/Setting';
// import PageNotFound from './routing/PageNotFound';
// import Layout from './routing/Layout';


// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>

//           <Route path='/' element={<Layout/>}>
//             <Route path='/' index element={<Home />} />
//             <Route path="/manu" element={<Manu />} />
//             <Route path="/setting" element={<Setting />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

//SECOND WAY OF ROUTING
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routing/Layout';
import Home from './routing/Home';
import Manu from './routing/Manu';
import Setting from './routing/Setting';
import PageNotFound from './routing/PageNotFound';

const App = () => {


  let routing = createBrowserRouter([
    {
       path:"/",
       element:<Layout/>,
       children:[
        {
          index:true,
          element:<Home/>
         },
         {
           path:"/manu",
           element:<Manu/>
         },
         {
          path:"/setting",
          element:<Setting/>
         },
         {
          path:"*",
          element:<PageNotFound/>
         }
       ] 
    }
])





  return (
    <>
        <RouterProvider router={routing}/>
      
    </>
  )
}

export default App

