import React from 'react'

const UserName = (props) => {
    console.log(props)

    if(props.name === "Bhima")
        throw new Error("Something want wrong.........")

  return (
    <>
      <h1>your name is {props.name}</h1>
    </>
  )
}

export default UserName
