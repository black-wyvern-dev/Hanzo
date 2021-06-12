import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './Screens/Main';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
});

export default Routes;
