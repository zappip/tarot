import React from 'react'
import "./Card.css"

const Card = (props) => {

let classes = `card ${props.position}`;

if (props.isNext) {
    classes += " nextcard"
}

  return (
    <div  onClick={e => props.nextCard()} className = {classes}>
              <img className = "cardImage" src={props.flipped ? `images/${props.name_short}.webp` : "images/unflipped.webp"}/>
    </div>
  )
}

export default Card