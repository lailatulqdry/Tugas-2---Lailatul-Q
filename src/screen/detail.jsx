import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Quran = ({ navigation }) => {
  const [dataQuran, setDataQuran] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('https://equran.id/api/v2/surat/1');
      const result = await response.json();
      setDataQuran(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 

  const renderItem = ({ item, index }) => (
    <TouchableOpacity key={index}>
      <View style={styles.itemContainer}>
        <Text style={styles.nomor}>{item.teksArab}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={dataQuran}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  nomor: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    backgroundColor: 'beige',
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
