import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Detail = ({ navigation, route }) => {
  const { gambar, nama, telpon, deskripsi } = route.params;

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <Text style={styles.title}>{nama}</Text>
      <Text style={styles.telp}>{telpon}</Text>
      <Text style={styles.desc}>{deskripsi}</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  telp: {
    fontSize: 16,
    color: '#3498db',
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default Detail;
