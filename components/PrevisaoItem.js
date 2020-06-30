import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';



const PrevisaoItem = (props) => {
  return (
    <Cartao estilos={estilos.cartao}>
      <View style={estilos.tela}>
        <Image
          style={estilos.imagem}
          // source ={{uri: ''}}
          source={{uri: "https://openweathermap.org/img/wn/" + props.previsao.item.weather[0].icon + ".png"}}
        />
        <View>
          <View style={estilos.primeiraLinha}>
            
          </View>
          <View style={estilos.segundaLinha}>
            <Text style={estilos.valor}>Sensação térmica: {props.previsao.item.feels_like + "\u00B0"}</Text>
            <Text style={estilos.valor}>Nascer do sol: {new Date(props.previsao.item.sunrise * 1000).toLocaleTimeString()}</Text>
            <Text style={estilos.valor}>Pôr do sol: {new Date(props.previsao.item.sunset * 1000).toLocaleTimeString()}</Text>
          </View>
        </View>
      </View>
    </Cartao>
  );
}

const estilos = StyleSheet.create({
    cartao:{
      marginBottom:8
    },
    tela:{
      flexDirection:'row'
    },
    imagem:{
      width:50,
      height:50
    },
    primeiraLinha:{
      justifyContent:'center',
      flexDirection:'row'
    },
    segundaLinha:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5,
      borderTopColor:'"DDD',
      borderTopWidth:1
    },
    valor:{
      marginHorizontal:2,
      borderColor:'black'
    }

});

export default PrevisaoItem;