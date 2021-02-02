import React from 'react'
import { Provider } from 'react-redux';
import BookContainer from './bookContainer';
import HookBookContainer from './hookBookContainer'
import store from  '../redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <BookContainer />
                <HookBookContainer/>
            </div>
        </Provider>
    );
}
