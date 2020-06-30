import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';
import PrevisaoItem from './components/Previsaoitem';

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
  const endpoint = "https://api.openweathermap.org/data/2.5/onecall?lang=pt&units=metric&lat=";
  const apiKey = 'YOUR KEY';

  const [cidade, setCidade] = useState('');
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }

  const [previsoes, setPrevisoes] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [previsao, setPrevisao] = useState('');

  const obtemPrevisao = () => {
    let lat, lon, prev;
    const target = endPoint + cidade + "&appid=" + apiKey; 
    
      fetch(target)
      .then((dados) => dados.json())
      .then((dados) => {
        lat = dados.city.coord['lat'];
        lon = dados.city.coord['lon'];
      
      setPrevisoes([])
      const t = endpoint + lat + "&lon=" + lon + "&appid=" + apiKey;

      fetch(t)
        .then((data) => data.json())
        .then((data) => {
          prev = data['current'];

           if (prev){
            setPrevisoes((previsoes) => {
            return ([prev, ...previsoes]);
          })
         }
           
      });      
    });
  }
  return (
    <View style={styles.container}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="OK"
          onPress={obtemPrevisao}
          color={'navy'}
          
        />
        <FlatList
          data={previsoes}
          renderItem={
            previsao => (
            // <Text>TESTE </Text>
              <PrevisaoItem previsao={previsao}>
                
              </PrevisaoItem>
            )
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
    padding: 40,
    // alignItems:'baseline',
    // justifyContent: 'center',
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center'
  }
});
