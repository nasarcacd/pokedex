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

const Entrenadores = ({navigation, pokemons}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navegationContainer}>
          <Button
            color="red"
            title="Agregar entrenador"
            onPress={() => alert('Left button pressed')}
          />
      </View>
      <View style={styles.pokemonContainer}>
        <FlatList
          data={[{name: "entrenador 1"}]}
          renderItem={({item}) => (
            <TouchableHighlight key={item.id} onPress={() => alert(item.name)}>
              <View style={styles.listItem}>
                <Text style={styles.pokemonName}>{item.name}</Text>
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
  pokemonContainer: {
    flexDirection: 'column',
  },
  listItem: {
    margin: 30,
    height: 150,
    width: 200,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  pokemonName: {
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

const mapStateToProps = ({pokemonStore}) => {
  return {
    pokemons: pokemonStore.pokemonList,
  };
};

export default connect(mapStateToProps)(Entrenadores);
