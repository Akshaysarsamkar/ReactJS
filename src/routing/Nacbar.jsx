import React from 'react'
import { NavLink } from 'react-router-dom'
const Nacbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <NavLink to={"/"}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={"/manu"}>
                        <li>Manu</li>
                    </NavLink>
                    <NavLink to={"/setting"}>
                        <li>Setting</li>
                    </NavLink>
                </ul>
            </nav>

        </>
    )
}

export default Nacbar


// in routing instead "anchor tag" Link and NavLink(Component)