import './App.css';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import scheduleReducer from './store/reducers/scheduleReducer';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import routeReducer from "./store/reducers/routeReducer";
import ScheduleContainer from "./containers/ScheduleContainer";
import Modal from "./components/UI/Modal/Modal";

const rootReducer = combineReducers({
    scheduleReducer: scheduleReducer,
    routeReducer: routeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header/>
                <Main/>
                <Modal>
                    <ScheduleContainer routeId={1}/>
                </Modal>
            </div>
        </Provider>
    );
};

export default App;
