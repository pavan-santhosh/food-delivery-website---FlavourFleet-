import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'
import bgvideo from '../images/burger.mp4'
import img1 from '../images/corousel1.jpg'
import img2 from '../images/corousel2.jpg'
import img3 from '../images/corousel3.jpg'
import img4 from '../images/corousel4.jpg'
import img from '../images/auth_background.jpeg'

function Signup() {


  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/signup',{username, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
  }
  


  return (
    <div className='SignupPage'>
        <div className='SignupPage-container'>
            <div id="carouselExampleDark" class="SignupPage-corousel carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img1} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-white">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img2} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-white">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-white">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
            </div>
            
            <div className='SignupPage-details'>
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
            <div>
                <input
                    type='text'
                    placeholder='Enter username'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button>Signup</button>
            <p style={{fontSize: 12}}>Already have an Account?<a href = '/login'>Sign-in</a></p>
            </form>
            </div>
  </div>
        {/*<h1>Signup</h1>
        
  </form>*/}
    </div>
  )
}

export default Signup