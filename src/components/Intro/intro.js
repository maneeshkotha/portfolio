import React from 'react'
import './intro.css';
import bg from "../../assets/myLinkedinimage.png"
import {Link} from 'react-scroll'

const Intro = () => {

  const resumeButton =()=>
  {
    const link ="https://drive.google.com/file/d/1pBn4EsCOtdbI0RJktYKVE9_63tI66IQO/view?usp=sharing";
    window.open(link, '_blank');
  }
  return (
    <section id='intro'>
    <div className='introContent'> 
    <span className='hello'>Hello</span>
    <span className='introText'>I'm <span className='introName'>Maneesh</span><br/>Masters Student At IIT</span>
 <p className='introPara'> I worked as a software engineer at IVY COMPTECH for a year and a half, <br/> during which I created a poker game using C# and WPF. <br/> I fully committed to learning a wide range of technologies throughout my two-month internship,<br/> including  HTML, CSS, Git, TypeScript, JavaScript, Angular, and React.
 </p>
 <Link ><button className='btn' onClick={resumeButton}>Resume</button></Link>
 </div>
 <img src={bg} alt="profile" className='bg'  />
    </section>
  )
}

export default Intro
