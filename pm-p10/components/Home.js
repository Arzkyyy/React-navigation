import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import Contact from './Contact';
import About from './About';

const Home = ({ navigation }) => {
  const contacts = [
    {
      gambar: require('../assets/lk.jpg'),
      nama: 'Lorem ipsum',
      telpon: '081234567890',
      deskripsi: 'Pria',
    },
    {
      gambar: require('../assets/pr.jpg'),
      nama: 'Dolor sit amet',
      telpon: '080987654321',
      deskripsi: 'Wanita',
    },
   
  ];

  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          gambar={contact.gambar}
          nama={contact.nama}
          telpon={contact.telpon}
          deskripsi={contact.deskripsi}
          navigation={navigation}
        />
      ))}
      <View style={{ margin: 20 }}>
        <Button title="Tentang Aplikasi" onPress={() => navigation.navigate('About')} />
      </View>
    </ScrollView>
  );
};

export default Home;
