import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Contact(props) {
  return (
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{props.nama}</Text>
        <Button
          title="Lihat Detail"
          onPress={() => props.navigation.navigate('Detail', { ...props })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    margin: 10,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  teks: { flex: 1 },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});
