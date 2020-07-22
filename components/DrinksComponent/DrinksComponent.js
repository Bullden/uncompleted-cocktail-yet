import React,{ useState } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { getDrinks} from '../../redux/actions/Drinks'
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default function DrinksComponent(props) {
    const dispatch = useDispatch()
    let list = useSelector(state =>{
        return  state.drinks.list})
    
    if(list) {
        list.map((i)=> { 
            dispatch(getDrinks(i))
        })
    }
    
    let drinks = useSelector(state => state.drinks.currentDrinks)     
 
    const [scroll, setScroll] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [height, setHeight] = useState(0)
    const [elem, setElem] = useState(1)
    
    const goToFilter = () => {
        const {navigate} = props.props.navigation
        navigate('FilterComponent')
    }    

    const find_dimesions=(layout) =>{
        const {x, y, width, height} = layout;
        console.warn(x);
        console.warn(y);
        console.warn(width);
        console.warn(height);
        setHeight(height)
    } 
    const handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y);
        setScroll(event.nativeEvent.contentOffset.y)

        if(height - scroll < 400) {
            setIsLoading(true)
            list.map((i, idx) => {
                if(idx === elem+1) {
                    dispatch(getDrinks(i))
                }
            })
        }else {
            setIsLoading(false)
        }
        setElem(elem+1)

        setHeight(height + event.nativeEvent.contentOffset.y)
        
    }   

    return(
        <View style={styles.container} onLayout={(event) => { find_dimesions(event.nativeEvent.layout) }}>
            <View style={styles.wrapHeader}>
                <View>
                    <Text style={styles.header}>Drinks</Text>
                </View>
                <TouchableOpacity onPress={() =>goToFilter(props)}>
                    <ImageBackground source={require('../../sources/Vector.png')} style ={styles.image} /> 
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} onScroll={handleScroll}>
                {drinks.map((i) => (
                    <View>
                        <View>
                            <Text>{i.name}</Text>
                        </View>
                        <View>
                            {i.list.map((i) => {
                                <View>
                                    <Image source={{uri: j.strDrinkThumb}}></Image>
                                    <Text>{i.strDrink}</Text>
                                </View>
                            })}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        justifyContent: 'flex-end'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    wrapHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        height: 60,
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    container: {
        backgroundColor: 'white',
        height: '100%'
    }
})