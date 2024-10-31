import React from "react";
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 2000, height: 80, backgroundColor: 'grey'}}></View>
      <Text>Vilanda Harsono</Text>
      <Mahasiswa />
      <Text>Informatika</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Mahasiswa = () => {
  return <Text>Mahasiswa STTP</Text>;
};

const Photo = () => {
  return (
    <Image
    source={{uri: 'https://i.pinimg.com/originals/39/fe/b7/39feb75b58316c85dd7d07e18d0016c1.gif'}}
    style={{width: 500, height: 500}}
    />
  );
};

export default App;