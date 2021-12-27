import './Host.css'
import React from 'react';

function Host() {
  return (
    <div className='host'>
        
      <form action="host.js" class="box" method="POST">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" name="" class="input"></input>
        <input type="password" placeholder="password" name="" class="input"></input>
        <input type="email" placeholder="email id" name="" class="input"></input>
        <input type="text" placeholder="Location" name="" class="input"></input>
        <input type="text" placeholder="Description" name="" class="input"></input>
        <input type="number" placeholder="Price in ₹" name="" class="input"></input>
        <input type="file" placeholder="upload image" name="" class="img"></input>
   
        <input type="submit" name="" value="Sign up" class="submit"></input>
        
             
      </form>
    </div>
  );
}

export default Host; 