// acts like as 'js file'

import React from "react"
import ReactDOM from "react-dom/client"
import App from './App'
import "./global.css"
// import MyProfile from "./MyProfile"


// console.log(React);
// console.log(ReactDOM);


// ReactDOM.createRoot(document.getElementById('root')).render("Akshay")  //  string 
// ReactDOM.createRoot(document.getElementById('root')).render(<h1>JSX</h1>)  // JSX
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)   // class based component 


// ReactDOM.createRoot(document.getElementById('root')).render(<App/>) // functional based component 



// MyProfile class based component impoerted here 
// ReactDOM.createRoot(document.getElementById('root')).render(<MyProfile/>)


// Myprofile function based component imported here 
// ReactDOM.createRoot(document.getElementById('root')).render(<MyProfile/>)


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

