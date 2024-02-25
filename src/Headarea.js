import React from 'react'
import './Headarea.css'
import Mainarea from '../mainarea/Mainarea'
const Headarea = () => {
  return (
    <div className='Homepage'>
   <div className='header'>
    <div className='frist-header'>
      <div className='logo'>
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqCR-f8kBrydYZwKylu2UQTKc1h6AYDqd90HbWVtgfQ&s" alt="logo"style={{height:'60px',padding:'1rem',position:'relative',top:'30px'}}/>
      </div>
      <div className='search'>
      <i class="fa fa-search" aria-hidden="true"></i>
      <input type='Search' placeholder='Search  Facebook'></input>
      </div>
    </div>
    <div className='middle-header'>
      <div className='Icon'>
      <i class="fa fa-home" aria-hidden="true" style={{color:'#1877f2',fontSize:'1.3rem'}}></i>
      </div>
      <div className='Icon'>
      <i class="fa fa-flag" aria-hidden="true" style={{fontSize:'1.3rem'}}></i>
      </div>
      <div className='Icon'>
      <i class="fa fa-caret-square-left" aria-hidden="true" style={{fontSize:'1.3rem'}}></i>
      </div>
      <div className='Icon'>
      <i class="fa fa-users" aria-hidden="true" style={{fontSize:'1.3rem'}}></i>
      </div>
      <div className='Icon'>
      <i class="fa fa-wallet" aria-hidden="true" style={{fontSize:'1.3rem'}}></i>
      </div>
    </div>
    <div className='thrid-header'>
      <div className='plus'>
      <i class="fa fa-plus" aria-hidden="true"style={{fontSize:'1.2rem'}}></i>
      </div>
      <div className='plus'>
      <div className='plus'>
      <i class="fa fa-message" aria-hidden="true"style={{fontSize:'1.2rem'}}></i>
      </div>
      <div className='plus'>
      <i class="fa fa-bell" aria-hidden="true"style={{fontSize:'1.2rem'}}></i>
      </div>
      <div className='plus'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdFil83brx57zDf2vYZ429qTodQteJR98ga4ki9TQtQ&s" alt="dp"style={{height:'40px'}}></img>
      </div>
      </div>
    </div>
   </div>
   <Mainarea/>
    </div>
  )
}

export default Headarea
