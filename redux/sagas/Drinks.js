import { put, takeEvery, call} from "redux-saga/effects";
import {callBackend, callBackendList, callBackendCategories} from '../../service/ApiService/ApiService'

export function* doGetLists() {
    
    yield takeEvery(`GET_LIST`, function* (action) {
        const answerBackend = yield call(callBackendList, 'GET', `list`)
        const result = answerBackend.data.drinks
        yield put( {
            type: `DRINKS_LIST`,
            payload: {
                result
            }
        })
    })
}

export function* doGetDrinks() {
    
    yield takeEvery(`GET_DRINKS`, function* (action) {
        let data = action.data.strCategory

        let current = data.split(' ').join('%20')

        const answerBackend = yield call(callBackendCategories, 'GET', current)
        const result = answerBackend.data.drinks
        yield put( {
            type: `DRINKS`,
            payload: {
                result,
                data
            }
        })
    })
}

