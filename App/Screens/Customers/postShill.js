import React from 'react';
import {Text, View, TextInput, Image, StyleSheet} from 'react-native';
import {
  Avatar,
  useTheme,
  Button
} from 'react-native-paper';
import { Icon } from 'native-base';

export const ShillPostForm = () => {
  const theme = useTheme();
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');
  const [content, setContent] = React.useState('');
  const [avatar, setAvatar] = React.useState('https://picsum.photos/100');
  const [image, setImage] = React.useState('https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small');

  const postBtnHandle = () => {
    console.log({
        name,
        id,
        content,
        avatar,
        image
    });
    if(name=='' || id == '' || content == '')return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, {flex: 0.5}]}>
            <Text style={[styles.label, {color: theme.colors.primary}]}> Name </Text>
            <TextInput
            style={[styles.input]}
            onChangeText={setName}
            placeholder=""
            value={name}
            />
            <Text style={[styles.label, {color: theme.colors.primary}]}> Id </Text>
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
        <Text style={[styles.label, {color: theme.colors.primary}]}> Content </Text>
        <TextInput
          style={[styles.input]}
          onChangeText={setContent}
          placeholder=""
          value={content}
        />
      </View>
      <View style={[styles.inputContainer, {}]}>
        <Text style={[styles.label, {color: theme.colors.primary}]}> Image(optional) </Text>
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
        labelStyle={{ color: 'white' }}
      >
        Post a message
      </Button>
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
    borderBottomColor: '#DDD',
    paddingBottom: 1,
    marginBottom: 10,
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
