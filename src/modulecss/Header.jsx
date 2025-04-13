import React from "react"
import Style from "./header.module.css"

const Header = ()=>{
    return (
        <>
           <div id={Style.navContainer}>
              <ul className={Style.listContainer}>
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
              </ul>
           </div>
        </>
    )
}

export default Header 