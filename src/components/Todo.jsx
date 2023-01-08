import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
export const Todo = ({ todoList, setTodoList, }) => {

    const [edit, setEdit] = useState({
        id: null,
        task: ''
    })
    
    const submitUpdate = (task) => {
        // event.preventDefault();
        
        updateTodo(edit.id, task);
        setEdit({
            id:null,
            task: task,
        })
    }
    const onDelete = (index) => {
        setTodoList( todoList.filter((todo, i) => i !== index))
    }
    
    
    const updateTodo = (todoId, newValue ) => {
        setTodoList(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    if(edit.id){
       return <TodoForm edit={ edit } onSubmit= { submitUpdate }/>
    }

    
  return (
    <ul>
    {
        todoList.map( (todo, index) => [
            <li key={todo.index}>
            { todo.task }
            <button onClick={ () => onDelete(index) }>Delete</button>
            <button onClick={() => setEdit( { id: todo.id, task: todo.task } )}> Edit</button>     
            </li>
                

        ])
    }

    </ul>
  )
}
