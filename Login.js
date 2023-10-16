import React, { useState } from 'react'
function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword]=useState('');
    const [userErr, setUserErr]=useState(false);
    const [passErr, setPassErr]=useState(false);
    function loginHandle(e) 
    {
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        
        if(item.length<4)
        {
            setUserErr(true)
        }
       else{
        setUserErr(false)
       }
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<4 )
        {
            setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="type here" placeholder="User Id" onChange={userHandler}/>{userErr?<span>user not valid</span>:''}  <br /> <br />
                <input type="type here" placeholder="Enter user Password" onChange={passwordHandler} />{passErr?<span>Password Not Valid</span>:''}<br /> <br />
                <button type='Submit'>login</button>
            </form>
        </div>
    )
}

export default Login;