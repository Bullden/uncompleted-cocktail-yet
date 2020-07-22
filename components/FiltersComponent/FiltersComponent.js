import React,{ useState } from 'react';
import {useSelector ,useDispatch } from 'react-redux'
import {getDrinks} from '../../redux/actions/Drinks'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import FilterItems from '../FilterItems/FilterItems';

export default function FilterComponent(props) {
    let list = useSelector(state => state.drinks.list)
    let itemsForShow = useSelector(state => state.drinks.checkList)

    const dispatch = useDispatch()
    const showList = () => {
        dispatch(getDrinks(itemsForShow))
    }
    const goToDrinks = () => {
        const {navigate} = props.navigation
        navigate('DrinkComponent')
    }
    return(
        <View style={styles.container}>
            <View style={styles.wrapHead}>
                <TouchableOpacity onPress={() =>goToDrinks(props)}>
                    <Image source={require('../../sources/Vector2.png')} style ={styles.image} /> 
                </TouchableOpacity>
                <Text style={styles.headText}>Filter</Text>
            </View>
            <View style={styles.wrapList}>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
                    {list.length && list.map((i,index) => (
                        <FilterItems item={i} key={index} />
                    ))}
                    <TouchableOpacity style={styles.button} onPress={() => showList()}>
                        <Text style={styles.buttonText}>apply</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapList: {
        paddingLeft: 35,
        paddingRight: 35,
    },
    wrapHead: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: '100%',
        paddingLeft: 20,
        alignItems: 'center',
    },
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#272727',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        paddingBottom: 17,
        paddingTop: 17,
        fontWeight: 'bold'
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 30
    },
    headText: {
        fontWeight: 'bold',
        fontSize: 24
    }
})