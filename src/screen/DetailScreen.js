import React, {useState, useEffect} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import axios from '../api/axios'

const DetailScreen = (props)=>{
    const [result, setResult]= useState(null)

    const id = props.navigation.getParam('id')

    const getResult = async () => {
        try{
            const response = axios.get(`/${id}`)
            setResult(response.data)
        }catch{
            console.log('something went wrong')
        }
    }

    useEffect(() => {
        getResult(id);
      }, []);
    
      if (!result) {
        return null;
      }
    
      return (
        <View>
          <Text>{result.name}</Text>
          <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={{ uri: item }} />;
            }}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      image: {
        height: 200,
        width: 300
      }
    });


const style = StyleSheet.create({})

export default DetailScreen;