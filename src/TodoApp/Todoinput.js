import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { addTodo } from '../TodoRedux/Action';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

export default function Todoinput() {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row m-2">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" />
                <Button
                    onClick={() => {
                        dispatch(addTodo(
                            {
                                id: uuid(),
                                name: name
                            }
                        ))
                        setName('');
                    }}
                    className="mx-2">Add</Button>
            </div>
        </div >
    )
}
