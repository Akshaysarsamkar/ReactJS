import React, { Component } from 'react'

export default class LifeCycleParent extends Component {
  
  
    constructor(){
        super()
        this.state={
            student:"Akshay"
        }
        console.log("Constructor is calling");
        
    }

    static getDerivedStateFromProps(){
        console.log("Static method is calling");
        return null
    }

     componentDidMount(){
        console.log("did mount is calling");
        
     }
  
    render() {
        console.log("render is calling.........");
        
    return (
      <>
        <h1>{this.state.student}</h1>
      </>
    )
  }
}
