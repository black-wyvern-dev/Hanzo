import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

import ProfileSettings from './ProfileSettings';

const Stack = createStackNavigator();

const SettingsPage = ({ navigation }) => {
    const superNavigation = navigation;
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="ProfileSettings"
                headerMode="screen"
                screenOptions={{
                    header: ({ scene, previous, navigation }) => {
                        const { options } = scene.descriptor;
                        const title =
                            options.headerTitle !== undefined
                                ? options.headerTitle
                                : options.title !== undefined
                                    ? options.title
                                    : scene.route.name;

                        return (
                            <Appbar.Header
                                style={{
                                    marginTop: 30,
                                    backgroundColor: 'rgb(234, 164, 67)'
                                }}
                            >
                                {title !== 'ProfileSettings' ? (
                                    <Appbar.BackAction
                                        onPress={navigation.goBack}
                                        color={'#4F0F0F'}
                                    />
                                ) : (
                                    <TouchableOpacity
                                        style={{ marginLeft: 10 }}
                                        onPress={() => {
                                            superNavigation.openDrawer();
                                        }}
                                    >
                                        <Icon
                                            name='home'
                                            type='MaterialIcons'
                                            style={{
                                                fontSize: 20,
                                                marginRight: 10,
                                                // color: theme.colors.primary
                                                color: '#4F0F0F',
                                            }}
                                            onPress={() => {
                                                superNavigation.openDrawer();
                                            }}
                                        />
                                    </TouchableOpacity>
                                )}
                                <Appbar.Content
                                    title={title}
                                    titleStyle={{
                                        fontSize: 26,
                                        fontFamily: 'Bradleys Pen',
                                        // color: theme.colors.primary,
                                        color: '#4F0F0F',
                                        alignSelf: 'center',
                                    }}
                                />
                            </Appbar.Header>
                        )
                    }
                }}
            >
                <Stack.Screen name="ProfileSettings" component={ProfileSettings}
                    options={({ navigation, route }) => ({
                        headerLeft: () => (
                            <Icon
                                name='home'
                                type='MaterialIcons'
                                style={{ fontSize: 20, marginLeft: 10 }}
                                onPress={() => {
                                }}
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default SettingsPage;