import React, { useState, useEffect } from "react";
import '../Style/LogIn.css'

const LogInContainer = () => {

  const [accessLevel, setAccessLevel] = useState("User");

  const handleSelect=(e)=>{
    e.preventDefault()
    console.log(e);
    window.location = "/api/inventory"
  }

  const handleUserSelect = (e) => {
    console.log(e.target.value)
    setAccessLevel(e.target.value)
  }
    
  return(
        <div className="login-wrapper">
      <h1>Log In Page</h1>
      <form onSubmit={handleSelect}>
        <label>
          <p>Username</p>
          <input type="text" required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" required/>
        </label>

        <label>
           <p>Log in as {accessLevel}</p>
           <select name="userLevel" value = {accessLevel} onChange = {handleUserSelect} >
               <option value="Manager">Manager</option>
               <option value="User">User</option>
           </select>
         </label>

        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  )
}


export default LogInContainer;