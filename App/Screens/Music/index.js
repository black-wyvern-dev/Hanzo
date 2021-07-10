import * as React from 'react';
import {
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Icon, Spinner } from 'native-base';
import { Button, Overlay } from 'react-native-elements';

import MusicPlayer from './MusicPlayer';
import MusicList from './MusicList';

import { useGlobals } from '../../contexts/Global';
import { getMusicList } from '../../apis/update';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const MusicPage = ({ navigation }) => {
  const [{ musicList, userInfo }, dispatch] = useGlobals();
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Unkown Error');
  const [loaded, setLoaded] = React.useState(false);
  const superNavigation = navigation;

  const closeAlert = () => {
    setShowAlert(false);
  }

  React.useEffect(async () => {
    if (loaded) return;
    try {
      const {
        data,
        errors,
      } = await getMusicList(userInfo.token);
      // console.log(data);
      // console.log(errors);
      setLoaded(true);
      if (!errors) {
        dispatch({
          type: 'setMusicList',
          fields: {
            data,
          },
        });
      }
      else {
        setErrorMsg(errors);
        setShowAlert(true);
        dispatch({
          type: 'setMusicList',
          fields: {
            data: [],
          },
        });
      }
    } finally {
    }
  }, []);

  if (!loaded) {
    return <Spinner style={{ margin: 15 }} />;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="MusicList"
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
                {title !== 'MusicList' ? (
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
        <Stack.Screen name="MusicList" component={MusicList}
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
        <Stack.Screen name="MusicPlayer" component={MusicPlayer}
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
      <Overlay isVisible={showAlert} onBackdropPress={() => closeAlert()}>
        <Text style={{ margin: 15 }}>{errorMsg}</Text>
        <Button title='Close' onPress={() => closeAlert()} />
      </Overlay>
    </NavigationContainer>
  );
};

export default MusicPage;