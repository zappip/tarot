import React from 'react'
import "./Explain.css"
const positionMap = {
    first: "Situation",
    second: "Challenge",
    third: "Beliefs",
    fourth: "Recent Past",
    fifth: "Possibilities",
    sixth: "Near Future",
    seventh: "Self-Perception",
    eighth: "How Others Perceive You",
    ninth: "Action Advice",
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