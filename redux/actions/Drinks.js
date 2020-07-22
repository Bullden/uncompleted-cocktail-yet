import { GET_LIST, GET_DRINKS, CHECK_LIST } from "../actionNames/Drinks";

export function getList(data) {
    return {type:GET_LIST, data}
}

export function getDrinks(data) {
    return {type:GET_DRINKS, data}
}

export function checkList(data) {
    return {type:CHECK_LIST, data}
}