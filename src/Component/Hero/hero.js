import React from 'react'
import './hero.css'
import heroimg from '../../Asset/me.jpg'
import heroimg2 from '../../Asset/wegea.png'
import tech from '../../Asset/react.png'
import html from '../../Asset/html.png'
import css from '../../Asset/css.png'
import js from '../../Asset/js.png'
import node from '../../Asset/node.png'
import firebase from '../../Asset/firebase.png'
import chapa from '../../Asset/chapa.png'

import Navbar from '../Navbar/Navbar'

function hero() {
  return (
    <div> 
    {/* <Navbar/> */}
    <section className='hero-container'>
    <div className='hero-content'>
    <h2>Wegene Argow</h2>

    <h1>Building Digital Experiance </h1>
    <p>passionate frontend developer ! transforming  ideas into seamless and visually stunning web solutions</p>

    </div>
    <div className='hero-img'>
    <div>
        <div className='tech-icon'>
            <img src={tech} alt='no tech icon'/>
        </div>
        <img  src={heroimg2} alt='no hero img'/>
    </div>
    <div>
        <div className='tech-icon'>
        <img src={html} alt='no html'/>

        </div>
          <div className='tech-icon'>
        <img src={css} alt='no html'/>

        </div>
          <div className='tech-icon'>
        <img src={js} alt='no html'/>

        </div>
         <div className='tech-icon'>
        <img src={firebase} alt='no html'/>

        </div>
        <div className='tech-icon'>
        <img src={node} alt='no html'/>

        </div>
        <div className='tech-icon'>
        <img src={chapa} alt='no html'/>

        </div>
        
    </div>
        
    </div>

    </section>
    </div>
  )
}

export default hero
