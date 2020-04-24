import React, { useEffect } from 'react'

const About = ({ data }) => {
  const { text, github, email, instagram } = data

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className="about-wrap">
      <div className='about-text' dangerouslySetInnerHTML={{ __html: text }}></div>
      <div className='about-links'>
        <span className='about-link-single'><a href={`mailto:${email}`} target='_blank' rel="noopener noreferrer">email</a>, </span>
        <span className='about-link-single'><a href={github} target='_blank' rel="noopener noreferrer">github</a>, </span>
        <span className='about-link-single'><a href={instagram} target='_blank' rel="noopener noreferrer">instagram</a></span>
      </div>
    </div>
  )
}

export default About
