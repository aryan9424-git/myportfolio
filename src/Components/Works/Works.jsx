import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/bakery.jpg';
import Portfolio2 from '../../assets/honey.jpg';
import Portfolio3 from '../../assets/dairy.jpg';
import Portfolio4 from '../../assets/hotel landing.jpg';
import Portfolio5 from '../../assets/amaghati.jpg';
import Portfolio6 from '../../assets/puphub.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <a href="https://bakerybomb.netlify.app"><img src={Portfolio1} alt="" className="worksImg" /></a>
            <a href="https://beeblisshoney.netlify.app"><img src={Portfolio2} alt="" className="worksImg" /></a>
            <a href="https://milkdairyfarm.netlify.app"><img src={Portfolio3} alt="" className="worksImg" /></a>
            <a href="https://hotellandingg.netlify.app"><img src={Portfolio4} alt="" className="worksImg" /></a>
            <a href="https://ghativilla.netlify.app"><img src={Portfolio5} alt="" className="worksImg" /></a>
            <a href="https://dogpuphub.netlify.app/"><img src={Portfolio6} alt="" className="worksImg" /></a>
        </div>
        <a href="https://app.netlify.com/teams/aryan9424-git/projects"><button className="worksBtn">See More</button></a>
    </section>
  );
}

export default Works
