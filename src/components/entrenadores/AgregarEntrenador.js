import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import {addEntrenador} from '../../actions/entrenadores/EntrenadoresActions';

const generos = [
  {
    id: '1',
    label: 'Hombre',
    value: 'Hombre',
  },
  {
    id: '2',
    label: 'Mujer',
    value: 'Mujer',
  },
  {
    id: '3',
    label: 'Otro',
    value: 'Otro',
  },
];

const AgregarEntrenador = ({navigation}) => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [lugar, setLugar] = useState('');
  const [radioGeneros, setRadioGeneros] = useState(generos);
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [telefono, setTelefono] = useState('');
 
  const onPressRadioButton = radioButtonsArray => {
    setRadioGeneros(radioButtonsArray);
  };

  const onSave = () => {
    if(nombre === "") {
      alert("El nombre es requerido!");
    } else {
      let genero = radioGeneros.find(e => e.selected == true);
      genero = genero ? genero.value : radioGeneros[0].label;
      dispatch(addEntrenador({nombre, apellidos, lugar, fechaNacimiento: fechaNacimiento.toDateString(), telefono, genero}));
      navigation.navigate('Entrenadores', {});
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
        onChangeText={setApellidos}
        value={apellidos}
        placeholder={'Apellidos'}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Genero:</Text>
        <RadioGroup
          radioButtons={radioGeneros}
          onPress={onPressRadioButton}
          layout="row"
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setLugar}
        value={lugar}
        placeholder={'Lugar de residencia'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTelefono}
        value={telefono}
        placeholder={'Telefono'}
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
      />
      <Text style={styles.title}>Fecha Nacimiento:</Text>
      <DatePicker
        mode="date"
        androidVariant="nativeAndroid"
        textColor="#ffffff"
        date={fechaNacimiento}
        onDateChange={setFechaNacimiento}
      />
      <Button color="red" title="Guardar" onPress={() => onSave()} />
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
