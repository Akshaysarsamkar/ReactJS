import React from 'react'
import Flag from "./images/flag.jpg"
import Profile from "./Profile"


const ProfileInfo = () => {

    let player = {
        pname: "MS Dhoni",
        batting: "Right-handed",
        role: "Wicket-keeper",
        image: "src/images/dhoni.jpg",
        logo: Flag
    };


    return (
        <>
            <Profile playerInfo={player}>
                <h2>He is right Handed Batter and wicket-keeper</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
                     qus totam labore vitae rerum minima. Quia atque ducimus, itaque 
                     quo maxime aperiam, maiores architecto quis temporibus esse velit 
                     amet totam exercitationem molestias praesentium. Voluptatibus nihil 
                     dignissimos possimus maxime rem expedita repellat, deleniti suscipit 
                     aperiam quas necessitatibus nostrum molestiae cum amet repellendus 
                     officia itaque obcaecati cupiditate!</p>
            </Profile>
        </>
    )
}

export default ProfileInfo
