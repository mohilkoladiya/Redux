import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import {deleteTodo, updateTodo} from '../TodoRedux/Action'

export default function Todoitem({todo}) {
    const [edittable , setEdittable] = useState(false);
    const [name , setName] = useState(todo.name);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="">
                    {edittable ? <input type="text" className="form-control" 
                                        onChange={
                                            (e)=> setName(e.target.value)
                                        } 
                                        value={name}/>: <h4>{todo.name}</h4>}
                </div>
                <Button 
                      onClick={()=>{
                          console.log("update");
                          if(edittable){
                            dispatch(updateTodo(
                                {
                                    ...todo,
                                    name:name
                                }
                            ))
                        }
                        setName(todo.name);
                          setEdittable(!edittable)
                      }}  className="m-2" variant="warning">{edittable ? "Update" : "Edit"}</Button>
                <Button
                    onClick={()=> dispatch(deleteTodo(todo.id))} className="m-2" variant="danger">Delete</Button>
            </div>
        </div>
    )
}
