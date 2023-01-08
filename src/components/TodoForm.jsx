import { useState } from "react"

export const TodoForm = ({ edit, onSubmit }) => {
    const [input, setInput] = useState( edit ? edit.task : '' );

    const onChanged = ({target}) => {
        setInput(target.value)
    }

    const onSubmitInput = (event) => {
        event.preventDefault();

        onSubmit({
            id: new Date().getTime(),
            task: input
        })

        setInput('');
    }

  return (
    <form onSubmit={ onSubmit }>
        
        {
            edit ? (
                <>
                    <input 
                    type="text" 
                    placeholder="Update your item"
                    value={ input || '' }
                    onChange={ onChanged }
                    />

                    <button onClick={ onSubmitInput }> 
                        Update
                    </button>
                </>

            ) : (
                <>
                <input
                    placeholder='Add a todo'
                    value={input || ''}
                    onChange={onchange}
                    name='text'
                    className='todo-input'
                />
                <button onClick={onSubmitInput} className='todo-button'>
                    Add todo
                </button>
                </>
            )}
    </form>
    
  )
}
