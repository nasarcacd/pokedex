import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetalleEntrenador = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>nombre:</Text>
      <Text style={styles.titleListValue}>{route.params.nombre}</Text>
      <Text style={styles.titleList}>Apellidos:</Text>
      <Text style={styles.titleListValue}>{route.params.apellidos}</Text>
      <Text style={styles.titleList}>Genero:</Text>
      <Text style={styles.titleListValue}>{route.params.genero}</Text>
      <Text style={styles.titleList}>Lugar residencia:</Text>
      <Text style={styles.titleListValue}>{route.params.lugar}</Text>
      <Text style={styles.titleList}>Telefono:</Text>
      <Text style={styles.titleListValue}>{route.params.telefono}</Text>
      <Text style={styles.titleList}>Fecha nacimiento:</Text>
      <Text style={styles.titleListValue}>{route.params.fechaNacimiento}</Text>
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

export default DetalleEntrenador;
