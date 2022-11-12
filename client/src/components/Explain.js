import React from 'react'
import "./Explain.css"
const positionMap = {
    first: "Your Situation Now",
    second: "The Challenge You Are Facing",
    third: "Your Beliefs",
    fourth: "Distant Past, Root of Problem",
    fifth: "Recent Past",
    sixth: "Near Future",
    seventh: "Self-Perception",
    eighth: "How Others Perceive You",
    ninth: "Action Advice, Hidden Information",
    tenth: "Outcome"
}
const Explain = (props) => {
  return (
    <div className='explaincontainer'> 
      {props.explanation &&
         <> <div className='explanationsection position'>
          {(positionMap[props.explanation.position])}
          </div>
          <div className='explanationsection name'>
          {(props.explanation.name)}
          </div>
          <div className='explanationsection meaning_up'>
          {(props.explanation.meaning_up)}
          </div>
          <div className='explanationsection desc'>
          {(props.explanation.desc)}
          </div>
          </>
      }
     
        
        
        
        </div>
  )
}

export default Explain