import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'

export default function Todolist() {
    const todos = useSelector(state => state)
    return (
        <div className="my-3">
            {
                todos.map(todo=>{
                    return <Todoitem key={todo.id} todo={todo}/>
                })
            }
        </div>
    )
}
