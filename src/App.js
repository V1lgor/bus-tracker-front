import './App.css';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import scheduleReducer from './store/reducers/scheduleReducer';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import routeReducer from "./store/reducers/routeReducer";
import stopReducer from "./store/reducers/stopReducer";
import cityReducer from "./store/reducers/cityReducer";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import RouteDashboard from "./containers/Dashboard/RouteDashboard/RouteDashboard";

const rootReducer = combineReducers({
    scheduleReducer: scheduleReducer,
    routeReducer: routeReducer,
    stopReducer: stopReducer,
    cityReducer: cityReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='App'>
                    <Switch>
                        <Route path={"/dashboard/routes"}>
                            <RouteDashboard/>
                        </Route>
                        <Route path={"/"}>
                            <Header/>
                            <Main/>
                        </Route>
                    </Switch>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
