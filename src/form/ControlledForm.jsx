// import React, { useState } from 'react'

// const ControlledForm = () => {


//     let [username, setUsername] = useState("")
//     let [useremail, setuserEmail] = useState("")


//     let handlename = (e)=>{
//       console.log(e);
//       setUsername(e.target.value);

//     }


//     let handleemail= (e)=>{
//         console.log(e);
//         setuserEmail(e.target.value)
//       }


//     // e -----> SBE
//     let handleSubmit = (e) => {
//         e.preventDefault()
//     }

//     return (
//         <>

//             <form action="" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="uname">User Name</label>
//                     <input type="text" id='uname' value={username} onChange={handlename}/>
//                 </div>
//                 <div>
//                     <label htmlFor="uemail">User Email</label>
//                     <input type="email" id='uemail' value={useremail} onChange={handleemail}/>
//                 </div>
//                 <div>
//                     <button>Submit</button>
//                 </div>
//             </form>

//         </>
//     )
// }

// export default ControlledForm





//EXAMPLE 2  : storing "diff input data" in "same state" variable ---- {} with key:value pair
// IF WE TAKE SAME STATE THEN FUN PASSED TO ONCHANGE SHOULD ALSO BE SAME  
import React from 'react'
import { useState } from 'react'

const ControlledForm = () => {

    let [inputdata, setInputData] = useState({
        username: "",
        useremail: "",
        gender: "",
        degree: ""
    })

    let { username, useremail, gender, degree } = inputdata
    let handleChange = (e) => {
        // console.log(e);
        let { name, value } = e.target
        setInputData({ ...inputdata, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputdata);
        console.log(skill)
       

    }


    
    // CHECKBOX 
    let [skill, setSkill] = useState([])

    let hanldlecheckbox = (e) => {

        if (e.target.checked === true) {
            setSkill([...skill, e.target.value])
        } else {
            let filterVal = skill.filter((value) => {
                return value !== e.target.value;
            })
            setSkill(filterVal);
        }

    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="uname">User Name</label>
                    <input type="text" id='uname' name='username' value={username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="uemail">User Email</label>
                    <input type="email" id='uemail' name='useremail' value={useremail} onChange={handleChange} />
                </div>

                <div value={gender} onChange={handleChange}>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name='gender' id='gender' value="Male" />Male
                    <input type="radio" name='gender' id='gender' value="Female" />Female
                    <input type="radio" name='gender' id='gender' value="Others" />Other
                </div>

                <div>
               
                    <label htmlFor="deg">Degree</label>
                    <select name="degree" id="deg" value={degree} onChange={handleChange}>
                        <option value="BCA">BCA</option>
                        <option value="BCS">BCS</option>
                        <option value="MCS">MCS</option>
                        <option value="MCA">MCA</option>
                    </select>
                </div>

                <div value={skill} onChange={hanldlecheckbox}>
                    <label htmlFor="">Skills</label>
                    <input type="checkbox" value="HTML" />HTML
                    <input type="checkbox" value="CSS" />CSS
                    <input type="checkbox" value="JS" />JS
                    <input type="checkbox" value="Reactjs" />Reactjs
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default ControlledForm
