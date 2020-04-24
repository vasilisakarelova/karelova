import React from 'react'
import Project from './Project'

const Projects = ({ data }) => {
  return (
    <div className='projects-wrap'>
      { data.map((project, idx) => {
          return <Project key={idx} data={project}/>
        })
      }
    </div>
  )
}
export default Projects
