import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [creds, setCreds] = useState({
     email:"eve.holt@reqres.in",
     password:"cityslicka",
  });
  const {login} = useContext(AuthContext)

  const handleOnchange = (e) =>{
    const {name , value} = e.target;

    setCreds({
      ...creds,[name]:value,
    });

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(creds.email && creds.password){
       login(creds.email,creds.password);
    }
    console.log(creds)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" type="email" placeholder="email" onChange={handleOnchange}/>
        <input data-cy="login-password" name="password" type="password" placeholder="password" onChange={handleOnchange}/>
        <button data-cy="login-submit" type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
