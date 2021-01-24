import React from 'react';
import { View, Image, Text, StyleSheet,  } from 'react-native';

const ResultsDetail = ({ result}) => {
    
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.footer}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({

  card:{
    backgroundColor:'rgb(192,192,192)',
    borderRadius:10,
    marginLeft:15
  } , 
  image: {
    width: 250,
    height: 120,
    borderRadius: 10
  },
  name: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 5
  },
  footer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontStyle:'italic'
  },
  
});

export default ResultsDetail;
