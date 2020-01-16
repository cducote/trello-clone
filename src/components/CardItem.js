import React from 'react';
import CardContainer from './CardContainer';

const CardItem  = (card, i) => {
    return (
        <div>
            <span>{card.title}</span>
        </div>
    )
}

export default CardItem