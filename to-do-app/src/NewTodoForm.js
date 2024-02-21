import React, { useState } from 'react'


function NewTodoForm ({addTodo}) {
  const [text, setText] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    addTodo(text)
    setText('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default NewTodoForm;


