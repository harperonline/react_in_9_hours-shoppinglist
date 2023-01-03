import React from 'react'

const Content = () => {

    const handleStringChange = () => {
        const strings = ['dog','cat','mouse'];
        const int = Math.floor(Math.random() * 3);
        return strings[int];
    }

  return (
    <main>
        <p>
            Hello {handleStringChange()}!
        </p>
    </main>
  )
}

export default Content