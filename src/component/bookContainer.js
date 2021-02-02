import React, { useState } from 'react'
import { connect } from 'react-redux';
import { buyBook } from '../redux';

function BookContainer(props) {
    const [number , setNumber ] = useState(1)

    return (
        <div align="center">
            <h1>Book Component</h1>                
            <h2>Number of Books - {props.numberOfBooks}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyBook(number)}>Buy {number} Book</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: (number) => {
            dispatch(buyBook(number));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)