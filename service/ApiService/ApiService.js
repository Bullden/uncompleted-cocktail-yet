import axios from 'axios';
import {urlBackendList, urlBackendCatgories} from "../url/url";

export async function callBackendList(method, path, data, url = urlBackendList.api) {
    const response = await axios(`${url}=${path}`, {
        method : method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        },
        data: !(method === "GET") ? JSON.stringify(data) : null
    })
    return await response
}

export async function callBackendCategories(method, path, data, url = urlBackendCatgories.api) {
    const response = await axios(`${url}=${path}`, {
        method : method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        },
        data: !(method === "GET") ? JSON.stringify(data) : null
    })
    return await response
}