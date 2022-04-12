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

  function getUserName(){
    var getInput = document.getElementById("getUser").value;
    console.log(getInput);
  }
    
  return(
      <div className="login-wrapper">
      <h1>Log In Page</h1>
      <form onSubmit={handleSelect}>
        <p>
        <label>
          <p>Username</p>
          <input type="text" required id="getUser"/>
        </label>
        </p>
        <p>
        <label>
          <p>Password</p>
          <input type="password" required/>
        </label>
        </p>
        <label>
           <p>Log in as {accessLevel}</p>
           <select name="userLevel" value = {accessLevel} onChange = {handleUserSelect} >
               <option value="Manager">Manager</option>
               <option value="User">User</option>
           </select>
         </label>

        <div className="submit-button">
          <input type="submit" value="submit" onClick = {getUserName}/>
        </div>
      </form>
    </div>
  )
}


export default LogInContainer;