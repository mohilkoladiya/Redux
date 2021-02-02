import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todoapp from './TodoApp/Todoapp';
import {store} from './TodoRedux/Store'
// import App from './component/App'
// import Acyncthunk from './acyncthunk'
// import App from './App';

// ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<Acyncthunk/>,document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(
        
            <Provider store={store}>
                <Todoapp />
            </Provider>
        , document.getElementById('root'));
