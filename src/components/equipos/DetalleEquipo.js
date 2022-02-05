import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetalleEquipo = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>nombre:</Text>
      <Text style={styles.titleListValue}>{route.params.nombre}</Text>
      <Text style={styles.titleList}>Entrenador:</Text>
      <Text style={styles.titleListValue}>{route.params.entrenador}</Text>
      <Text style={styles.titleList}>Pokemones:</Text>
      <Text style={styles.titleListValue}></Text>
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
  titleList: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '900',
    color: '#757575',
  },
  titleListValue: {
    fontSize: 17,
    textAlign: 'justify',
    color: '#000000',
  },
});

export default DetalleEquipo;
