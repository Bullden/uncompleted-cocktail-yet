import React from 'react';
import { useDispatch } from 'react-redux'
import {getList} from '../../redux/actions/Drinks'
import DrinksComponent from './DrinksComponent';

export default function DrinksContainer(props) {
    const dispatch = useDispatch()
    dispatch(getList())
    return(
        <DrinksComponent props = {props} drinks={drinks}/>
    )
}