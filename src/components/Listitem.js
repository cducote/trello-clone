import React, { useState } from "react";
import CardContainer from "./CardContainer";
import CardItem from './CardItem'

const Listitem = ({ list, deleteList, i, addCard, cards, state }) => {

  // const [cards, setCard] = useState(state)
  const [newCard, setNewCard] = useState(false)
  return (
  <div className="list-item">
    <span>{list.title}</span>
    <span onClick={() => deleteList( i )} className='delete-btn'> x</span>
    <div className='card-form-container'>
        <button>Add card</button>
        <CardContainer/>
        <div>
          {/* {console.log(cards)} */}
        {/* {cards.length ?
          cards.map((item, i) => (
            <CardItem key={item.id} card={item} i={i} />
          ))
          : ''} */}
        </div>
    </div>
  </div>
  )
};


export default Listitem;
