import React, { useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";

const ToggleTheme = () => {
    let [theme, setTheme] = useState(false);

    let toggle = () => {
        setTheme(!theme)
    }


    let ChangeColor = () => {
        if (theme) {
            document.body.className = "dark"
        } else {
            document.body.className = "light"

        }
    }
    return (
        <>
            <ChangeColor />
            <h1>{theme ? "Dark Theme" : "Light Theme"}</h1>
            <button onClick={toggle}>{theme ? <IoIosSunny/> : <LuSunMoon/>}</button>
        </>
    )
}

export default ToggleTheme
