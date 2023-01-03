import React from 'react'

const Content = () => {

  const handleStringChange = () => {
      const strings = ['dog','cat','mouse'];
      const int = Math.floor(Math.random() * 3);
      return strings[int];
  }

  const handleClick = () => {
    console.log('You clicked it');
  }

  const handleClick2 = (name,e) => {
    console.log(`${name} was clicked`);
    console.log(e);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleStringChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={(e)=>{handleClick2('Chris', e)}}>Click it</button>
        <button onClick={(e)=>{handleClick3(e)}}>Click it</button>
    </main>
  )
}

export default Content