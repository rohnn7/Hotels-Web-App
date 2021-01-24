import React from 'react';
import { View, Text, StyleSheet ,FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultDetail'

const ResultsList = ({ title, results,navigation }) => {
  return (
    <View>
      <Text style={styles.title}>{title} :</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity onPress={()=>{navigation.navigate('Detail', {id: item.id})}}>
                  <ResultsDetail   result={item} />
              </TouchableOpacity>
          );
        }}
      />
      {results.length===0?<Text style={styles.textStyle}>No hotel around your area ~\' _ '/~</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal:15,
    color:'rgb(192,192,192)'

  },
  textStyle:{
    marginHorizontal:15,
    fontSize:20,
    color:'rgb(192,192,192)',
    fontStyle:'italic',
    alignItems:'center'

    
},
});

export default ResultsList;
