import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
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
        {dataQuran?.map((data, index) => {
          return (
            <TouchableOpacity key={index}>
              <Text style={styles.ayat}>
                {data.nomor} - {data.nama} - {data.namaLatin}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  )
}

export default Quran;

const styles = StyleSheet.create({
  ayat: {
    fontSize: 21,
    fontWeight: 'normal',
  },
});