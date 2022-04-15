import React from 'react'
import Login from './Login'
import classes from '../styles/Home.module.css';
import img from '../assets/images/img.jpg'

const Home = () => {
  return (
    <div className={classes.mainHome}>
        <div className={classes.login} >
        <Login />
        </div>

        <div className={classes.pic}>
            <img src={img} alt="people"/>
        </div>
    </div>
  )
}

export default Home