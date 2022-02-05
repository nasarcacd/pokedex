import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  TextInput,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {fetchPokemons, fetchPokemonsTypes} from '../../services/PokemonService';

const Pokemons = ({navigation, pokemons, types}) => {
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    dispatch(fetchPokemons());
    dispatch(fetchPokemonsTypes());
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filterName.toLowerCase()),
      ),
    );
  }, [pokemons, filterName]);

  return (
    <View style={styles.container}>
      <View style={styles.navegationContainer}>
        <Button
          color="red"
          title="Entrenadores"
          onPress={() => navigation.navigate('Entrenadores', {})}
        />
        <Button
          title="Equipos"
          onPress={() => navigation.navigate('Equipos', {})}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleItemContainer}>151 pokémon</Text>
      </View>
      <TextInput
        placeholder="Filtrar por nombre"
        keyboardType="web-search"
        value={filterName}
        onChangeText={setFilterName}
      />
      <View style={styles.pokemonContainer}>
        <FlatList
          data={filteredPokemon}
          renderItem={({item}) => (
            <TouchableHighlight
              key={item.id}
              onPress={() => navigation.navigate('DetallePokemon', {...item})}>
              <View style={styles.listItem}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.photo,
                  }}
                />
                <Text style={styles.name}>{item.name}</Text>
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
    fontWeight: 'bold',
    color: '#206796',
    fontSize: 20,
  },
  pokemonContainer: {
    flexDirection: 'column',
  },
  typeListItem: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  listItem: {
    margin: 10,
    height: 150,
    width: 200,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'visible',
  },
  typeItem: {
    margin: 10,
  },
  type: {
    fontSize: 15,
    margin: 10,
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
    types: pokemonStore.typesList,
  };
};

export default connect(mapStateToProps)(Pokemons);
