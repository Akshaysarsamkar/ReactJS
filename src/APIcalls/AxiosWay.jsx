import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const AxiosWay = () => {
    let [user, setUser ] = useState([])

    let getApi = async () => {
        let{data} = await axios.get("https://api.github.com/users")
        setUser(data)
        console.log(data);
        
    }

    console.log("State", user);

    useEffect(() => {
        try {
           getApi();
        } catch (error) {
           console.log(error);
           
        }
    }, [])

    return (
        <>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Img</th>
                    <th>Login</th>
                </tr>
            </thead>
            <tbody>
                {user.map((val)=>{
                   console.log("current val" , val);
                   let{login,id,avatar_url} = val
                   
                   return(
                    <Fragment key={id}>
                        <tr>
                            <td>{id}</td>
                            <td>
                                <img src={avatar_url} alt="" height="250px" width="250px"/>
                            </td>
                            <td>{login}</td>
                        </tr>
                    </Fragment>
                   );
                })}
            </tbody>
        </table>

        </>
    )
}

export default AxiosWay
