import React from 'react';
import './Intro.css'
import bg from '../../assets/1000375606-Photoroom.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">I'm <span className="introName">Aryan Jaiswal</span> <br />Website Developer.</span>
            <p className="introPara">I am a skilled and passionate web developer with experience in creating <br />visually appealing and user-friendly websites.</p>
            <a href='#footer'> <button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></a>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
