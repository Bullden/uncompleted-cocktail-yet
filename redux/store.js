import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { all } from 'redux-saga/effects';
import { doGetDrinks, doGetLists } from './sagas/Drinks';
// import {doFindLocation, doFindPhoneCode} from "./sagas/ChooseLocation";
// import {doGetNumber} from "./sagas/GetNumber";
// import {doVerifyCode} from "./sagas/VerifyCode";
// import {doGetAllData} from "./sagas/Store";
// import { doSetAddress, doSetPersonalInfo } from './sagas/OptionProfile';
// import { doGetUser } from './sagas/Profile';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const composeEnhancers = composeWithDevTools({});
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            const nextRootReducer = require('./rootReducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    sagaMiddleware.run(function*() {
        yield all( [doGetDrinks(), doGetLists()] );
    });

    return store;
}
