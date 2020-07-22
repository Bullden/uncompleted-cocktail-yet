import { GET_LIST, GET_DRINKS, CHECK_LIST } from "../actionNames/Drinks";

export const initialState = {
    list: '',
    drinks: '',
    checkList: [],
    currentDrinks: []
}

export function drinksReducer(
    state = initialState,
    action
) {
    switch(action.type) {
        case GET_LIST: {
            return {
                ...state,
            }
        }
        case 'DRINKS_LIST': {
            return {
                ...state,
                list: action.payload.result
            }
        }
        case GET_DRINKS: {
            return {
                ...state,
                drinks: action.payload
            }
        }
        case 'DRINKS': {
            let obj = {
                name: action.payload.data,
                list: action.payload.result
            }
            let arr = initialState.currentDrinks
            arr.push(obj)
            return {
                ...state,
                currentDrinks: arr
            }
        }
        case CHECK_LIST: {
            let array = initialState.checkList
            
            if(array.length !== 0) {
                let isSame = array.find((i) =>  i.strCategory === action.data.strCategory)
                console.log('isSame',isSame);
                if(isSame) {
                    array.map((i,idx) => {
                        if(i === isSame)
                        array.splice(idx,1)
                    })
                } else {
                    array.push(action.data)
                }
               
            } else {
                array.push(action.data)
            }
            console.log(array);
            return {
                ...state,
                checkList: array
            }
        }

        default:
            return state
    }
}
export const drinks = (state) => state.list
