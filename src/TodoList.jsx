import { useState } from "react"
import { AddTodos } from "./components/AddTodos"
import { Todo } from "./components/Todo"

export const TodoList = () => {

    const [todoList, setTodoList] = useState([])

    const onAddTodo = ( onNewCategory ) => {
        setTodoList([
            onNewCategory,
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
