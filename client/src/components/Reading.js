import React from 'react'
import Card from './Card'
import './Reading.css'


const Reading = (props) => {
    return (

        <div className="Reading">
            {props.cardList.map((card, index) => (
                <Card 
                position = {card.position} 
                name_short = {card.name_short} 
                flipped = {card.flipped} 
                isNext = {card.isNext}
                nextCard = {props.nextCard}
                />
                    ))}
        </div>
      );
}

            export default Reading