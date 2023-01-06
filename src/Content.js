import React from 'react' //Component import
import { useState } from 'react'; //Hook import
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        desc: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        desc: "Item 2"
    },
    {
        id: 3,
        checked: false,
        desc: "Item 3"
    }
  ]);

  const name = "Chris";


  //Introducted in chapter 7 so go over it again - MAP giher-order function
  const handleCheck = (id) => {
    //Create a new temp array of the list items after a check changeoveright the 'items' array with this new array
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item );
    setItems(listItems); //overight the 'items' array with this new temp array 'listItems'
    localStorage.setItem('shoppingList', JSON.stringify(listItems)); //Store the list items on disk
  }

  const handleDelete = (id) => {
    //Filter will create a new temp array but filter out the id
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems); //overight the 'items' array with this new temp array 'listItems'
    localStorage.setItem('shoppingList', JSON.stringify(listItems)); //Store the list items on disk
  }
  
 

  return (
    <main>
      {items.length > 0 ? (
        //list is NOT empty
          <ul>
            {items.map((item) => ( //map will iterate through a list or an array. Treat each iteration as 'item' on LOAD
          

              <li className="item" key={item.id}> {/* iteration in react needs a key to know what element has changed*/}

                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)} /* Yhis arrow function updates the state of the items list to reflect this UI change*/
                  checked={item.checked}
                />

                <label 
                  style={(item.checked) ? {textDecoration:'line-through'} : null}
                  onDoubleClick={() => handleCheck(item.id)}
                >{item.desc}</label>

                <FaTrashAlt 
                  role="button" 
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                />

              </li>

  

            ))}
          </ul>

      ):(
        //List is empty so show a message
        <p style={{marginTop: '2rem '}}>The list is empty</p>
      )}

    </main>
  )
}

export default Content