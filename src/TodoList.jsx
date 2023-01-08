import { useState } from "react"
import { AddTodos } from "./components/AddTodos"
import { Todo } from "./components/Todo"

export const TodoList = () => {

    const [todoList, setTodoList] = useState([])

    const onAddTodo = ( onNewCategory ) => {
        let newTodo = {
          id: new Date().getTime(),
          task: onNewCategory,
          completed: false
        }
        setTodoList([
              newTodo,
            ...todoList
        ])
        
    }

  return (
    <div className="todoList">
        <div className="todoList-content">
        <h1>TodoList</h1>
        <hr />
        <AddTodos onNewCategory = { onAddTodo }/>
        <Todo todoList={ todoList } setTodoList= { setTodoList }/>
        </div>
    </div>
  )
}
