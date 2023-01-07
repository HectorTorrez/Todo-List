import { useState } from "react"

export const AddTodos = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if( inputValue.trim() <= 1 ) return;
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }
    
  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text" 
        placeholder="Add todo"
        value={ inputValue }
        onChange={ onInputChange }
        />

    </form>
  )
}
