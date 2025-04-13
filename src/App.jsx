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

 
// 3] MODULE CSS
import React from "react";
import Header from "./modulecss/Header"

const App = ()=>{
    return(
        <>
        <Header/>
        </>
    )
}

export default App