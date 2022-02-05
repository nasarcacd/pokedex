import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

const EquiposHome = ({navigation, equipos}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navegationContainer}>
          <Button
            title="Agregar equipo"
            onPress={() => navigation.navigate('AgregarEquipo', {})}
          />
      </View>
      <View style={styles.equiposContainer}>
        <FlatList
          data={equipos}
          renderItem={({item, index}) => (
            <TouchableHighlight key={index} onPress={() => navigation.navigate('DetalleEquipo', {...item})}>
              <View style={styles.listItem}>
                <Text style={styles.name}>{item.nombre}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padingTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'orange',
  },
  titleContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  titleItemContainer: {
    marginLeft: 30,
    fontWeight: 'bold',
    color: '#206796',
  },
  equiposContainer: {
    flexDirection: 'column',
  },
  listItem: {
    margin: 15,
    height: 50,
    width: 50,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 130,
  },
  navegationContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    width: 210,
  },
});

const mapStateToProps = ({equiposStore}) => {
  return {
    equipos: equiposStore.equiposList,
  };
};

export default connect(mapStateToProps)(EquiposHome);
