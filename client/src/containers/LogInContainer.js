import React from "react";
import '../Style/LogIn.css'

const LogInContainer = () => {
    
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

        <label>
           <p>Log in as:</p>
           <select name="userLevel" >
               <option value="">--Please choose an option--</option>
               <option value="Manager">Manager</option>
               <option value="User">User</option>
           </select>
         </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default LogInContainer;