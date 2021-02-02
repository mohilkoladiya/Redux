import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyBook} from '../redux'

export default function HookBookContainer() {
    const numberOfBooks = useSelector(state=>state.numberOfBooks);
    const dispatch = useDispatch();
    return (
        <div align="center">
            <h1>Hook Container</h1>
            <h2>Number of Books - {numberOfBooks}</h2>
            <button onClick={()=>dispatch(buyBook())}>buyBook</button>
        </div>
    )
}
