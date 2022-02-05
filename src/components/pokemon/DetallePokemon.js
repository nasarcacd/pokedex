import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const DetallePokemon = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        #{route.params.id} {route.params.name}
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri: route.params.photo,
        }}
      />
      <Text style={styles.titleList}>Movimientos:</Text>
      <Text style={styles.titleListValue}>{route.params.moves}</Text>
      <Text style={styles.titleList}>Altura:</Text>
      <Text style={styles.titleListValue}>{route.params.height}</Text>
      <Text style={styles.titleList}>Peso:</Text>
      <Text style={styles.titleListValue}>{route.params.weight}</Text>
      <Text style={styles.titleList}>Tipo:</Text>
      <Text style={styles.titleListValue}>{route.params.typesDetails}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padingTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'orange',
    height: '100%',
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleList: {
    fontSize: 13,
    fontWeight: '900',
    color: '#000000',
  },
  titleListValue: {
    fontSize: 12,
    textAlign: 'justify',
  },
});

export default DetallePokemon;
