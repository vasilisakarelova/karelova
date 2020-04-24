import React from 'react'

const Project = ({ data }) => {
  const { title, year, link, collaborators, screenshots } = data

  return (
    <div className='project-single-wrap'>
      <div className='project-single--title'>{title}<span><a href={link}>(link)</a></span></div>
      <div className='project-single--screenshots-outer'>
        <div className='project-single--screenshots-wrap'>
          <div className='project-single--screenshots-scroll'>
            <div className='project-single--screenshots'>
              { screenshots.map((screenshot, idx) => {
                  return (
                    <div key={idx} className='project-single--screenshots-single'>
                      <div key={idx} className='project-single--screenshots-single-inner'>
                        <img alt={`${title} screenshot ${idx}`} src={screenshot} onLoad={ev => ev.target.style.opacity = 1}/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='project-single--info'>
        Type="<span>website</span>";<br/>
        Year="<span>{year}</span>";<br/>
        Collaborators={'{'}<br/> { Object.keys(collaborators).map((key, idx) => {
            return (
              <span className='project-single--info-collab' key={idx}>{key}: <a href={collaborators[key].link}>{collaborators[key].name}</a>;<br/></span>
            )
          })
        } {'}'}
      </div>
    </div>
  )
}
export default Project
