import React from 'react'
export const Todo = ({ todoList, setTodoList }) => {

    const onDelete = (index) => {
        setTodoList( todoList.filter((todo, i) => i !== index))
    }

    const onEdit = (index, newValue) => {
        const newTodos = [...todoList];
        newTodos[index] = newValue;
        setTodoList(newTodos);
      }
  return (
    <ul>
    {
        todoList.map( (todo, index) => [

            <li key={index}>
                    { todo }
                    <button onClick={ () => onDelete(index) }>Delete</button>
                    <button onClick={ () => onEdit(index) }>Edit</button>
            </li>

        ])
    }

    </ul>
  )
}
