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

  const handleCheck = (id) => {
    console.log(`key: ${id}`);
  }
 
 

  return (
    <main>
        <ul>
          {items.map((item) => (

            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label>{item.desc}</label>
              <FaTrashAlt 
                role="button" 
                tabIndex="0"/>
            </li>

          ))}
        </ul>
    </main>
  )
}

export default Content