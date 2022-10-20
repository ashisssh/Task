import React from "react";

function Login(){
    return (
    <div>
        <form action="/action_page.php" method="post">
        <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>
            <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username"  name="uname" required/>
            <label for="uname"><b>Username</b></label>
    <input type="Password" placeholder="Enter Password"  name="psw" required/>
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> 
    </label>
    <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
            </div>
        </form>
        <style
        
        />
    </div>
    );
}

export default Login;