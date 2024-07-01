// Contact.js
import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

const contacts = [
  {
    id: 1,
    gambar: require('../assets/lk.jpg'),
    nama: 'Lorem ipsum',
    telpon: '081234567890',
    deskripsi: 'Pria',
  },
  {
    id: 2,
    gambar: require('../assets/pr.jpg'),
    nama: 'Dolor sit amet',
    telpon: '080987654321',
    deskripsi: 'Wanita',
  },
];

const Contact = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Teman</Text>
      {contacts.map((contact) => (
        <View key={contact.id} style={styles.friendContainer}>
          <Image source={contact.gambar} style={styles.img} />
          <Text style={styles.name}>{contact.nama}</Text>
          <Button
            title="Detail"
            onPress={() => navigation.navigate('Detail', { contact })}
          />
        </View>
      ))}
      <Button title="Kembali" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
});

export default Contact;
