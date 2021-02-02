import React from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'
import 'boostrap/package.json'
export default function Todoapp() {
    return (
        <div className="App m-5">
            <Todoinput/>
            <Todolist/>
        </div>
    )
}
