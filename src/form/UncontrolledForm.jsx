import React, { useRef } from 'react'

const UncontrolledForm = () => {

  let nameRef = useRef();   // 1st input
  let emailRef = useRef();  // 2nd input

  console.log(nameRef);
  console.log(emailRef);
  
  
  // PASSING A PARAMETER TO A FUNTION THAT FUNCTION IF WE PASS IT AS A VALUE FOT ANY EVENT SUCH A CASE PARAMETER HOLDS---- SYNTHEIC BASED EVENT 
  // event(onSubmit) ---> SBE
  let handlesubmit = (event) =>{
    event.preventDefault(); // stop the auto reloading form
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);

  }



    return (
        <>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="uname">User Name</label>
                    <input type="text" id="uname" ref={nameRef}/>
                </div>
                <div>
                    <label htmlFor="uemail">User Name</label>
                    <input type="email" id="uemail"ref={emailRef} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default UncontrolledForm
