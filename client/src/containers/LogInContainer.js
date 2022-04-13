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
        <div className="border">
          <h2>Log In Page</h2>
          <form onSubmit={handleSelect}>
          <p>
          <label>
            <p>Username</p>
            <input type="text" required/>
          </label>
          </p>
          <p>
          <label>
            <p>Password</p>
            <input type="password" required/>
          </label>
          </p>
          <div className="submit-button">
          <input type="submit" value="Submit" />
          </div>
          <div className="version">
            <p>v2.110</p>
          </div>
          </form>
          </div>
      </div>

  )
}


export default LogInContainer;