import React, { createContext, useState } from 'react'
import MyProfile from './../MyProfile';

// STATE1: CREATE CONTEXT 

export let ProfileApi = createContext();



const ProfileContext = () => {

    let employee = "Akshay Kumar"
    let salary = 85000
    let[company,setCompany] = useState("IBM");


    let changeCompany = ()=>{
        setCompany("Google")
    }
  return (

  // step 2 : context provider
    <ProfileApi.Provider value={{employee,salary,company,changeCompany}}>
      <MyProfile/>
    </ProfileApi.Provider>
  )
}
export default ProfileContext
