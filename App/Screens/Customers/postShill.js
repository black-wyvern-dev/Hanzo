import React from 'react';
import { Text, View, TextInput, Image, StyleSheet } from 'react-native';
import {
  Avatar,
  useTheme,
  Button
} from 'react-native-paper';
import { Icon } from 'native-base';
import { postShill } from '../../apis/update';
import { useGlobals } from '../../contexts/Global';
import { Overlay } from 'react-native-elements';
import { Spinner } from 'native-base';

export const ShillPostForm = () => {
  const theme = useTheme();
  const [{ userInfo }, dispatch] = useGlobals();
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');
  const [content, setContent] = React.useState('');
  const [avatar, setAvatar] = React.useState('https://picsum.photos/100');
  const [image, setImage] = React.useState('https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small');
  const [showProgress, setShowProgress] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Unkown Error');

  const closeAlert = () => {
    setShowAlert(false);
  }

  const postBtnHandle = async () => {
    try {
      if (name == '' || id == '' || content == '') {
        console.log('Shill Info is invalid. Try again.');
        setErrorMsg('Shill Info is invalid. Try again.');
        setShowAlert(true);
        return;
      }
      setShowProgress(true);
      const {
        errors,
      } = await postShill({
        name,
        id,
        content,
        avatar,
        image
      }, userInfo.token ?? '');
      setShowProgress(false);
      if (!errors) {
        console.log('Post succeed');
      } else {
        setErrorMsg(errors);
        setShowAlert(true);
      }
    } catch (err) {

    } finally { }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, { flex: 0.5 }]}>
          <Text style={[styles.label, {
            color: 'rgb(74, 15, 15)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 3,
            textShadowColor: 'rgba(0,0,0,0.75)',
          }]}> Name </Text>
          <TextInput
            style={[styles.input]}
            onChangeText={setName}
            placeholder=""
            value={name}
          />
          <Text style={[styles.label, {
            color: 'rgb(74, 15, 15)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 3,
            textShadowColor: 'rgba(0,0,0,0.75)',
          }]}> Id </Text>
          <TextInput
            style={[styles.input]}
            onChangeText={setId}
            placeholder=""
            value={id}
          />
        </View>
        <View style={[styles.inputContainer, styles.avatarContainer]}>
          <Avatar.Image source={{ uri: avatar }} size={85} />
          <Icon
            name='edit'
            type='MaterialIcons'
            style={[styles.avatarIcon, {}]}
            onPress={() => {
              // superNavigation.openDrawer();
            }}
          />
        </View>
      </View>
      <View style={[styles.inputContainer, {}]}>
        <Text style={[styles.label, {
          color: 'rgb(74, 15, 15)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 3,
          textShadowColor: 'rgba(0,0,0,0.75)',
        }]}> Content </Text>
        <TextInput
          style={[styles.input]}
          onChangeText={setContent}
          placeholder=""
          value={content}
        />
      </View>
      <View style={[styles.inputContainer, {}]}>
        <Text style={[styles.label, {
          color: 'rgb(74, 15, 15)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 3,
          textShadowColor: 'rgba(0,0,0,0.75)',
        }]}> Image(optional) </Text>
        <TextInput
          style={[styles.input]}
          onChangeText={setImage}
          placeholder=""
          value={image}
        />
        {
          image != '' ?
            <Image
              source={{ uri: image }}
              style={[
                styles.image,
              ]}
            />
            : <></>
        }
      </View>
      <Button
        onPress={postBtnHandle}
        style={styles.button}
        mode="contained"
        labelStyle={{ color: 'rgb(74, 15, 15)' }}
        color="#EAA443"
      >
        Post a message
      </Button>
      <Overlay isVisible={showAlert} onBackdropPress={() => closeAlert()}>
        <Text style={{ margin: 15 }}>{errorMsg}</Text>
        <Button
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => closeAlert()}
          labelStyle={{ color: 'white' }}
        >
          Close
        </Button>
      </Overlay>
      <Overlay isVisible={showProgress} onBackdropPress={() => setShowProgress(false)}>
        <Spinner style={{ margin: 15 }} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 30,
    width: '100%',
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginVertical: 15,
    marginBottom: 0,
  },
  avatarContainer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.7,
  },
  avatarIcon: {
    position: 'absolute',
    fontSize: 30,
    color: 'white',
    left: '35%',
    marginRight: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#EAA443',
    paddingBottom: 1,
    marginBottom: 10,
    color: 'rgb(74, 15, 15)',
  },
  label: {
    color: 'red',
    fontSize: 14,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  button: {
    marginTop: 20,
  },
});
