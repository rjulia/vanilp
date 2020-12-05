import React from 'react'
import Tool from './tool'

const Tools = () => {
  return (
    <div>
      <Tool 
        title='Design tools'
        subtitle='- Sketch, Figma, Adobe Creative Suite, Balsamiq'
        percentage='95'
      />
      <Tool 
        title='Prototyping tools'
        subtitle=' - Origami, Noodl, InVision Studio'
        percentage='78'
      />
      <Tool 
        title='Collaboration and Handoff tools'
        subtitle='- Zeplin, InVision, Jira'
        percentage='95'
      />
      <Tool 
        title='HTML5, CSS'
        subtitle=''
        percentage='25'
      />
      
    </div>
  )
}

export default Tools
