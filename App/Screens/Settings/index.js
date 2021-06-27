import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';

import ProfileSettings from './ProfileSettings';

const Stack = createStackNavigator();

const SettingsPage = ({ navigation }) => {
    const superNavigation = navigation;
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="ProfileSettings">
                <Stack.Screen name="ProfileSettings" component={ProfileSettings}
                    options={({ navigation, route }) => ({
                        headerLeft: () => (
                            <Icon
                                name='home'
                                type='MaterialIcons'
                                style={{ fontSize: 20, marginLeft: 10 }}
                                onPress={() => {
                                    superNavigation.openDrawer();
                                }}
                            />
                        ),
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default SettingsPage;