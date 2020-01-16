import React, { useState } from "react";
import Listitem from "./Listitem";
import ListForm from "./ListForm";

const List = () => {
  const initialState = [
    {
      title: "IceBox",
      id: 1,
      cards: [
          {
              id: 0,
              text: 'make navbar'
          },
          {
              id: 1,
              text: 'have more coffee'
          }
      ]
    },
    {
      title: "Todo",
      id: 2,
      cards: []
    }
  ];
  const [newList, setNewList] = useState(false);
  const [lists, setList] = useState(initialState);
  const [cards, setCard] = useState(initialState)
  const [newCard, setNewCard] = useState(false)


  const addList = (title, id) => {
    const newLists = [...lists, { title, id }];
    setList(newLists);
  };

  const toggleListForm = () => {
    setNewList(!newList);
  };

  const addCard = (text, id) => {
      const newCard = [...cards, { text, id }]
      setNewCard(newCard)
  }

  const handleDeleteList = ( index ) => {
      const newLists = [...lists]
      newLists.splice( index, 1 )
      setList( newLists )
  }

  return (
    
    <div className='board-container'>
      <h3>Project Name</h3>
      <div className="list-container">
        {lists.length
          ? lists.map((item, i) => (
              <Listitem 
                list={item}  
                key={item.id} 
                item={item} 
                i={i} 
                deleteList={handleDeleteList} 
                addCard={addCard} 
                // cards={initialState.lists.cards} 
              />
            ))
          : ""}
      </div>
      {!newList ? (
        <button onClick={toggleListForm}>Add List</button>
      ) : (
        <ListForm addList={addList} />
      )}
    </div>
  );
};

export default List;
