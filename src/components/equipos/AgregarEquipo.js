import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addEquipo} from '../../actions/equipos/EquiposActions';

const AgregarEntrenador = ({navigation}) => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [entrenador, setEntrenador] = useState('');

  const onSave = () => {
    if(nombre === "") {
      alert("El nombre es requerido!");
    } else {
      dispatch(addEquipo({nombre, entrenador}));
      navigation.navigate('Equipos', {});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNombre}
        value={nombre}
        placeholder={'Nombre'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEntrenador}
        value={entrenador}
        placeholder={'Entrenador'}
      />
      <Button title="Guardar" onPress={() => onSave()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padingTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'orange',
    height: '100%',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#64b5f6',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#757575',
  },
  inputContainer: {
    flexDirection: 'row',
  },
});

export default AgregarEntrenador;
