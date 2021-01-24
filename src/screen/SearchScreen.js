import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import axios from '../api/axios'
import ResultList from '../components/ResultList'

const SearchScreen = (props)=>{
   
    const [term, setTerm] = useState('')
    const [results, setResult] = useState([])
    const [error, setError] = useState('')

    let searchResult = null
    if(results.length>0){
    searchResult=(<Text style={style.textStyle}>We have found {results.length} results for you :</Text>)
    }

    const getResults = async (searchTerm)=>{
        try{
            const response = await axios.get('/search',{
                params:{
                    limit: 50,
                    term:searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses)
        }catch{
            setError('Something went wrong!')
        }
    
        setTerm('')
    }

    const filterResultsWithPrice = price =>{
        return results.filter(result=>{
            return result.price == price
        })
    }

    useEffect(()=>{
        getResults('pasta')
        setTerm('')
    }, [])

    return(
        <View style={{flex:1}}>
            <SearchBar
                term={term}
                onTermChange={(newTerm)=>{setTerm(newTerm)}}
                onTermSubmit={getResults}
            />
            <Text style={style.errorStyle}>{error? error : null}</Text>
            {searchResult}
            <ScrollView>
               <ResultList navigation={props.navigation} style={style.container} results={filterResultsWithPrice('$')} title='Cost Effective'/>
               <ResultList navigation={props.navigation} style={style.container} results={filterResultsWithPrice('$$')} title='Bit Pricer'/>
               <ResultList navigation={props.navigation} style={style.container} results={filterResultsWithPrice('$$')} title='Bit Splenderer'/>
            </ScrollView>
            
        </View>
    )
}

const style = StyleSheet.create({
    textStyle:{
        marginHorizontal:15,
        fontSize:20,
        color:'rgb(192,192,192)'
        
    },
    errorStyle:{
        marginHorizontal:15,
        fontSize:20,
        color:'red'
        
    },
    container:{
        marginBottom:15
    }
})

export default SearchScreen;