import ReactDOM from 'react-dom';
import App from './App';

import reducer from './reducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

//* create redux store
const store = createStore(reducer);
const root = document.querySelector("#root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
)