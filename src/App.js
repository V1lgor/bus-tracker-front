import './App.css';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import scheduleReducer from './store/reducers/scheduleReducer';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import routeReducer from "./store/reducers/routeReducer";
import ScheduleContainer from "./containers/ScheduleContainer";
import Spinner from "./components/UI/Spinner/Spinner";
import stopReducer from "./store/reducers/stopReducer";

const rootReducer = combineReducers({
    scheduleReducer: scheduleReducer,
    routeReducer: routeReducer,
    stopReducer: stopReducer
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
