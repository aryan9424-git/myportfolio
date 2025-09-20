import React from 'react'
import './Skills.css'
import a from '../../assets/a.png'
import b from '../../assets/b.png'
import c from '../../assets/c.png'
import d from '../../assets/d.png'

const Skills = () => {
  return (
    <section id='Skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I build interactive and high-performance web interfaces using HTML, CSS, JavaScript, and modern frameworks like React. I focus on creating seamless user experiences across all devices and browsers.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={a} alt="UIDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>Front-End Development</h2>
                    <p>I craft modern, responsive, and user-friendly interfaces using HTML, CSS, and JavaScript. <br /> I focus on creating pixel-perfect layouts and smooth user interactions with clean, maintainable code.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={b} alt="WebDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>React & Frameworks</h2>
                    <p>I build dynamic user experiences using JavaScript and modern frameworks like React (or Vue/Next.js, etc. you can update this). I also work with state management and reusable components to develop scalable UIs.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={c} alt="AppDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>Responsive & Cross-Browser Design</h2>
                    <p>I ensure that websites look and function perfectly across all screen sizes and browsers. From mobile-first design to handling edge cases, I optimize for performance and accessibility.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={d} alt="AppDesign" className='skillBarImg' />
                <div className="skillBarText">
                    <h2>API Integration</h2>
                    <p>I integrate front-end applications with RESTful APIs to fetch and display dynamic data. I handle asynchronous operations, error states, and loading indicators for a smooth user experience.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills
