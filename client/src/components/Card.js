import React from 'react'
import "./Card.css"

const Card = (props) => {

    let classes = `card ${props.position}`;

    if (props.isNext) {
        classes += " nextcard"
    }
    if (props.flipped) {
        classes += " isflipped"
    }

    const image = `images/${props.name_short}.webp`

    return (
        <div onClick={e => props.nextCard()} className={classes}>
            <div className="flip-card">
                <div className={props.flipped ? "flip-card-inner flipped f" + props.position : "flip-card-inner f" + props.position}>
                    <div className="flip-card-front">
                        <img className="cardImage" src="images/unflipped.webp" />
                    </div>
                    <div className="flip-card-back">
                        <img className="cardImage" src={image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card