// import React, { Component } from 'react'

// class ErrorBoundary extends Component {
//     constructor(){
//         super()
//         this.state = {
//             haserror : false // initial value false indicate initially there is no error 
//         }
//     }

//     // reaponsiable for displaying the eoor msg 
//     // capture error 
//     // return update state in the form obj 
//     static getDerivedStateFromError(){
//         return {
//             haserror:true // indicate there is an error
//         }
//     }

//   render(){
//     console.log(this);

//     if(this.state.haserror === true)
//         return <h1>Server is Busy please Wait..........</h1>
//     else
//         return this.props.children


//   }
// }

// export default ErrorBoundary



// example 2
import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(err, info) {
        console.log(err);

        console.log(info);

    }
    render() {
        if (this.state.hasError === true)
            return <h1>Server is Busy please Wait..........</h1>
        else
            return this.props.children

    }
}




