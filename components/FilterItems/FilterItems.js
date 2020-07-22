import React,{ useState } from 'react';
import { useDispatch } from 'react-redux'
import { checkList } from '../../redux/actions/Drinks'
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export default function FilterItems({ item }) {

    const [isCheck, setCheck] = useState(false)
    const dispatch = useDispatch()
    const checkItem = (item) => {
        isCheck ? setCheck(false) : setCheck(true)
        if(isCheck) {
            setCheck(false)
            
        } else {
            setCheck(true)
        }
        let str = {strCategory: item}
        dispatch(checkList(str))
    }
    
    console.log('props',isCheck);
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => checkItem(item.strCategory)} style={styles.wrapItem}>
                <View>
                    <Text style={styles.text}>{item.strCategory}</Text>
                </View>
                <View>
                    {isCheck ? (
                        <Image source={require('../../sources/Vector1.png')} style={styles.check}/>
                    ) : null}
                </View> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    check: {
        width: 35,
        height: 30,
        justifyContent: 'flex-end',
        resizeMode: 'contain'
    },
    wrapItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60
    },
    text: {
        fontSize: 16,
        color: '#7E7E7E'
    }
})