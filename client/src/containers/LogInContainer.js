import React, { useState } from "react";
import '../Style/LogIn.css'

const LogInContainer = () => {

  const [managerMode, setManagerMode] = useState(null);
  const [userMode, setUserMode] = useState(null);

  let url = "http://localhost:3000/tvs"

  const isManager = () => {
    setManagerMode(true)
    setUserMode(false)
    window.location.replace = url
  }
    
  const isUser = () => {
    setUserMode(true)
    setManagerMode(false)
    window.location.replace = url
  }
    
  return(
        <div className="login-wrapper">
      <h1>Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>

        {/* <label>
           <p>Log in as:</p>
           <select name="userLevel" >
               <option value="">--Please choose an option--</option>
               <option value="Manager">Manager</option>
               <option value="User">User</option>
           </select>
         </label> */}

        <div>
          <button onClick={isManager} type="submit">Manager</button>
          <button onClick={isUser} type="submit">User</button>
        </div>
      </form>
    </div>
  )
}


export default LogInContainer;