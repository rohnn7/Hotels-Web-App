import React from 'react'
import {Text, View, StyleSheet, TextInput  } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = (props)=>{
    
    return(
        <View style={styles.background}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={props.term}
                onChangeText={newTerm=>props.onTermChange(newTerm)}
                placeholder='Search' 
                style={styles.inputStyle}
                onEndEditing={()=>props.onTermSubmit(props.term)} />
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgb(192,192,192)',
        height:50,
        borderRadius:10,
        margin:15,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:20
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        paddingHorizontal: 15

    }
})

export default SearchBar;