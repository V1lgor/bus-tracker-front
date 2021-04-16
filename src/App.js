import './App.css';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import scheduleReducer from './store/reducers/scheduleReducer';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Form from "./components/Form/Form";
import routeReducer from "./store/reducers/routeReducer";
import stopReducer from "./store/reducers/stopReducer";
import cityReducer from "./store/reducers/cityReducer";

const rootReducer = combineReducers({
    scheduleReducer: scheduleReducer,
    routeReducer: routeReducer,
    stopReducer: stopReducer,
    cityReducer: cityReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header/>
                <Main/>
            </div>
        </Provider>
    );
};

export default App;