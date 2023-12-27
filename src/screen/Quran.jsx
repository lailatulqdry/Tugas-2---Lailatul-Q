import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import React, {useState, useEffect} from 'react'

const Quran = () => {
  //1. Buat state / penyimpanan data
  const [dataQuran, setDataQuran] = useState(null);
  //2. Fungsi untuk mengambil data dari API
  const getData = async () => {
    try {
      const respon = await fetch('https://equran.id/api/v2/surat'); //koneksi ke API
      const hasil = await respon.json();
      //console.log(hasil.data);
      setDataQuran(hasil.data);
    } catch (error) {
      console.log(error);
    }
  };
  //3. load data dari fungsi getData pake useEffect
  useEffect(() => {
    getData();
  });
  
  return (
    <View>
      <ScrollView>
        <Text style={{
          padding: 30,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'black',
        }}>Al-Qur'an</Text>
        {dataQuran?.map((data, index) => {
          return (
            <View style={{flex:1, backgroundColor: 'white'}}>
            <TouchableOpacity key={index}>
              <Text style={styles.nomor}>
                {data.nomor}. 
                {data.namaLatin}
              </Text>
              <Text style={styles.nama}>
                {data.nama}
              </Text>
            </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  )
}


export default Quran;

const styles = StyleSheet.create({
  nomor: {
    fontWeight: 'bold',
    fontSize: 15,
    flexDirection: 'row',
    flex: 1,
    color: 'black',
    marginTop: 10,
    backgroundColor: 'beige'
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    color: 'black',
    backgroundColor: 'beige'
  },
});