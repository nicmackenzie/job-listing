import React from 'react'

function Navbar() {


 const links = [
  {
   name: 'Home',
   link: '/home'
  },
  {
   name: 'About',
   link: '/about'
  },
  {
   name: 'Contact',
   link: '/contact'
  },
  {
   name: 'Blog',
   link: '/blog'
  }
 ]

 const linksMap = links.map((link) =>{
  return (
   
   <li key={link.link}>
    <a href={link.link}>{link.name}</a>
   </li>
   
  )
 })



  return (
    <nav>     
      <ul>
        {linksMap}
      </ul>
    </nav>
  )
}

export default Navbar