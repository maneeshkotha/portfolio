import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png';
const Navbar = () => {
  const[showMenu,setShowMenu] =useState(false);
  const openLinkedButton = ()=>
  {
   const linkedInProfile= 'https://www.linkedin.com/in/maneeshkotha5';
   
    window.open(linkedInProfile,'_blank')
   
  };

  
  return (
   <nav className='navbar'>
      <button className='linkedin' onClick={openLinkedButton}>Linkedin</button>
      <div className='desktopMenu' >
         <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='desktopMenuListItem'>Home</Link>
         <Link activeClass='active' to='proo' spy={true} smooth={true} duration={500} offset={-100} className='desktopMenuListItem'>Projects</Link>
         <Link activeClass='active' to='SkillsClass' spy={true} smooth={true} duration={500} offset={-100}className='desktopMenuListItem'>Skills</Link>
         <Link activeClass='active' to='qualification section' spy={true} smooth={true} duration={500} offset={-100}className='desktopMenuListItem'>Edu & Work </Link>
      </div>
      <div className='resumecontactbtn'>

    
    
      <button className='desktopMenuBtn' onClick={()=>
      {
        document.getElementById('contactmain').scrollIntoView({behavior:'smooth'})
      }}> 
        <img src='' alt='' className='desktopMenuImg'/> Contact Me
      </button>

      <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display : showMenu? 'flex':'none'}}>
         <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
         <Link activeClass='active' to='ProjectsClass' spy={true} smooth={true} duration={500} offset={-100} className='ListItem' onClick={()=>setShowMenu(false)}>Projects</Link>
         <Link activeClass='active' to='SkillsClass' spy={true} smooth={true} duration={500} offset={-100}className='ListItem' onClick={()=>setShowMenu(false)}>Skills</Link>
         <Link activeClass='active' to='qualification__icon1"' spy={true} smooth={true} duration={500} offset={-100}className='ListItem' onClick={()=>setShowMenu(false)}>Education & Work Experience</Link>
      </div>






      </div>
      




   </nav>
  )
}

export default Navbar;
