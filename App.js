import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { initialState, reducer, StateProvider } from './App/contexts/Global';
import Routes from './App/Routes';

const Stack = createStackNavigator();

export default function App() {
  return (
     <StateProvider initialState={initialState} reducer={reducer}>
      <Routes/>
    </StateProvider>
  );
}
