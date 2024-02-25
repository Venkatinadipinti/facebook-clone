import React from 'react'
import './Loginpage.css'
const Loginpage = () => {
  return (
    <div className='Login'>
      <div className='facebook'>
        <div className='facebooktext'>
            facebook
        </div>
        <div className='title'>
            facebook helps you connect and share<br></br> with the pepole in your life
        </div>
      </div>
      <div className='logincontainer'>
        <div className='logindetails'>
            <input type='email' placeholder='Email address or phone number'></input>
            <br></br>
            <input type='password' placeholder='password'></input>
            <br></br>
            <button className='btn'>
            Login 
            </button>
        </div>
        <div className='forget'>
            <a href='forget'>forgotten password</a>
            <br></br>
            <button className="btns">
                Create New Account
            </button>
        </div>
        <p></p>
        <br></br>
      </div>
      <div className='page'>
            <a href="createpage"><b>Create a Page</b></a> for a celebrity,brand or business
        </div>
    </div>
  )
}

export default Loginpage



