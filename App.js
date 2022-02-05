import React from 'react';
import PokemonsHome from './src/components/pokemon/PokemonsHome';
import {Provider} from 'react-redux';
import configureStore from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entrenadores from './src/components/entrenadores/EntrenadoresHome';
import AgregarEntrenador from './src/components/entrenadores/AgregarEntrenador';
import DetallePokemon from './src/components/pokemon/DetallePokemon';
import DetalleEntrenador from './src/components/entrenadores/DetalleEntrenador';
import Equipos from './src/components/equipos/EquiposHome';
import DetalleEquipo from './src/components/equipos/DetalleEquipo';
import AgregarEquipo from './src/components/equipos/AgregarEquipo';

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
            <Stack.Screen name="AgregarEntrenador" component={AgregarEntrenador} options={{title: "Nuevo Entrenador"}} />
            <Stack.Screen name="DetalleEntrenador" component={DetalleEntrenador} options={{title: "Entrenador Info"}} />
            <Stack.Screen name="Equipos" component={Equipos} options={{title: "Equipos"}} />
            <Stack.Screen name="AgregarEquipo" component={AgregarEquipo} options={{title: "Nuevo Equipo"}} />
            <Stack.Screen name="DetalleEquipo" component={DetalleEquipo} options={{title: "Equipo Info"}} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
