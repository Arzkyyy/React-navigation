// Detail.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.gambar} style={styles.img} />
      <Text style={styles.name}>{contact.nama}</Text>
      <Text style={styles.telpon}>{contact.telpon}</Text>
      <Text style={styles.desc}>{contact.deskripsi}</Text>
      <Button title="Kembali" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  telpon: {
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
