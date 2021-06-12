import * as React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import {StyleSheet, I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import { PreferencesContext } from './contexts/preferencesContext';

import Main from './Screens/Main';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

const Stack = createStackNavigator();

const Routes = () => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = React.useState(
        colorScheme === 'dark' ? 'dark' : 'light'
    );
    const [rtl] = React.useState(I18nManager.isRTL);
    function toggleTheme() {
      setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }
    const toggleRTL = React.useCallback(() => {
      I18nManager.forceRTL(!rtl);
      Updates.reloadFromCache();
    }, [rtl]);
    const preferences = React.useMemo(
      () => ({
        toggleTheme,
        toggleRTL,
        theme,
        rtl: (rtl ? 'right' : 'left'),
      }),
      [rtl, theme, toggleRTL]
    );
    return(
      <SafeAreaProvider>
        <AppearanceProvider>
          <PreferencesContext.Provider value={preferences}>
            <PaperProvider
                theme={
                theme === 'light'
                    ? {
                        ...DefaultTheme,
                        colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
                    }
                    : {
                        ...DarkTheme,
                        colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
                    }
                }
            >
            <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
            </NavigationContainer>
            </PaperProvider>
          </PreferencesContext.Provider>
        </AppearanceProvider>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
});

export default Routes;
