import React from 'react'

const Profile = (props) => {

    console.log(props)
    let { playerInfo: { pname, batting, role, image, logo, run = 4520 }, children } = props

    return (
        <>
            <section className='profile'>
                <h1 className='name'>Profile of {pname}</h1>
                <img src={image} alt={pname} height="200px" width="250px" className='img'/>
                <h1>Batting : {batting}</h1>
                <h2>Role: {role}</h2>
                <img src={logo} alt="" height="50px" width="100px" />
                {children}
            </section>
        </>
    )
}

export default Profile
