import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {fetchPokemonsAPI} from '../services/PokemonService';

const Pokemons = ({navigation, pokemons}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonsAPI());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.navegationContainer}>
          <Button
            color="red"
            title="Entrenadores"
            onPress={() =>
              navigation.navigate('Entrenadores', {})
            }
          />
          <Button
            title="Equipos"
            onPress={() => alert('Right button pressed')}
          />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleItemContainer}>151 pokémon</Text>
        <Text style={styles.titleItemContainer}>Filtros:</Text>
      </View>
      <View style={styles.pokemonContainer}>
        <FlatList
          data={pokemons}
          renderItem={({item}) => (
            <TouchableHighlight key={item.id} onPress={() => navigation.navigate('DetallePokemon', {...item})}>
              <View style={styles.listItem}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.photo,
                  }}
                />
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

export default connect(mapStateToProps)(Pokemons);
