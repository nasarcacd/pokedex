import React from 'react';
import PokemonsHome from './src/components/PokemonsHome';
import {Provider} from 'react-redux';
import configureStore from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entrenadores from './src/components/Entrenadores';
import DetallePokemon from './src/components/DetallePokemon';

const Stack = createNativeStackNavigator();

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={PokemonsHome} options={{title: "Home"}} />
            <Stack.Screen name="DetallePokemon" component={DetallePokemon} options={{title: "Poke Info"}} />
            <Stack.Screen name="Entrenadores" component={Entrenadores} options={{title: "Entrenadores"}} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
