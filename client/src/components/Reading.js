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
            {/* <Card position = "first" name_short = "ar17" flipped = {true}/>
            <Card position = "second" name_short = "ar02" flipped = {true}/>
            <Card position = "third" name_short = "pequ" flipped = {true}/>
            <Card position = "fourth" name_short = "wa05" flipped = {true}/>
            <Card position = "fifth" name_short = "pepa" flipped = {true}/>
            <Card position = "sixth" name_short = "ar03" flipped = {true}/>
            <Card position = "seventh" name_short = "wa03" flipped = {true}/>
            <Card position = "eighth" name_short = "ar06" flipped = {true}/>
            <Card position = "ninth" name_short = "wa09" flipped = {true}/>
            <Card position = "tenth" name_short = "sw05" flipped = {true}/> */}
        </div>
      );
}

            export default Reading