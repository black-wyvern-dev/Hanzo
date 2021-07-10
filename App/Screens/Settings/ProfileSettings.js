import * as React from 'react';
import {
    Image,
    View,
    Text,
    TextInput,
    ScrollView,
    ImageBackground
} from 'react-native';
import {
    Avatar,
    useTheme,
    Button
} from 'react-native-paper';
import { Overlay } from 'react-native-elements';
import { Icon, Spinner } from 'native-base';
import { useGlobals } from '../../contexts/Global';
import styles from './ProfileSettingsStyle';
import { changeProfile, avatarUpload, changePassword } from '../../apis/update';
// import { useGlobals } from '../../contexts/Global';
const ImagePicker = require("react-native-image-picker");

const ProfileSettings = ({ navigation }) => {
    const [{ userInfo, deviceToken }, dispatch] = useGlobals();
    const [firstName, setFirstName] = React.useState(userInfo.first_name);
    const [lastName, setLastName] = React.useState(userInfo.last_name);
    const [email, setEmail] = React.useState(userInfo.email);
    const [newPassword, setNewPassword] = React.useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('Unkown Error');
    const [showProgress, setShowProgress] = React.useState(false);
    let [avatar, setAvatar] = React.useState(userInfo.avatar);
    const theme = useTheme();
    console.log(avatar);
    const messageIdGenerator = () => {
        // generates uuid.
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    const progressCallback = progressEvent => {
        const percentFraction = progressEvent.loaded / progressEvent.total;
        const percent = Math.floor(percentFraction * 100);
        // if (!progressFlag.includes('size')) {
        //     progressFlag.push('size');
        //     dispatch(S3Reducer.setUploadFileSize(progressEvent.total / 1000));
        // }
        if (percent % 10 === 0 && !progressFlag.includes(percent)) {
            // progressFlag.push(percent);
            // dispatch(S3Reducer.setUploadProgress(percentFraction));
        }
        if (percentFraction === 1) {
            // dispatch(S3Reducer.setUploadStatus('processing'));
        }
    };

    const postBtnHandle = async () => {
        try {
            if (firstName == '' || lastName == '' || email == '') {
                setErrorMsg('Shill Info is invalid. Try again.');
                setShowAlert(true);
                return;
            }
            console.log(avatar);
            setShowProgress(true);
            const id = userInfo.id;
            const {
                data,
                errors,
            } = await changeProfile({
                id,
                firstName,
                lastName,
                email,
                avatar,

            }, userInfo.token ?? '');

            setShowProgress(false);
            if (!errors) {
                const token = userInfo.token;
                dispatch({
                    type: 'setUserInfo',
                    fields: {
                        ...data,
                        token,
                    },
                });
            } else {
                setErrorMsg(errors);
                setShowAlert(true);
            }
        } catch (err) {

        } finally { }
    }

    const closeAlert = () => {
        setShowAlert(false);
    }



    const handleAddAvatar = () => {
        // const { user } = this.props; // wherever you user data is stored;
        const options = {
            title: "Select Pic",
            mediaType: "photo",
            takePhotoButtonTitle: "Take a Photo",
            maxWidth: 256,
            maxHeight: 256,
            allowsEditing: true,
            noData: true
        };
        ImagePicker.launchImageLibrary(options, async response => {
            if (response.didCancel) {
                // do nothing
            } else if (response.error) {
                // alert error
            } else {
                const { uri } = response.assets[0];
                const extensionIndex = uri.lastIndexOf(".");
                const extension = uri.slice(extensionIndex + 1);
                const allowedExtensions = ["jpg", "jpeg", "png"];
                const correspondingMime = ["image/jpeg", "image/jpeg", "image/png"];
                setAvatar(uri);
                const file = {
                    uri,
                    name: `${messageIdGenerator()}.${extension}`,
                    type: correspondingMime[allowedExtensions.indexOf(extension)]
                };

                const { avatarUrl, errorAvatar } = await avatarUpload(file, progressCallback, userInfo.token);
                if (errorAvatar) return;
                console.log('uploaded success');

            }
        });
    };

    const handleChangePassword = async () => {
        try {
            if (newPassword != newPasswordConfirm) {
                setErrorMsg(`Password Comfirmation doesn't match!`);
                setShowAlert(true);
                return;
            }
            setShowProgress(true);
            const {
                data,
                errors,
            } = await changePassword({
                newPassword,
            }, userInfo.token ?? '');

            setShowProgress(false);
            if (!errors) {
                const token = userInfo.token;
                dispatch({
                    type: 'setUserInfo',
                    fields: {
                        ...data,
                        token,
                    },
                });
            } else {
                setErrorMsg(errors);
                setShowAlert(true);
            }
        } catch (err) {

        } finally { }
    }
    return (
        <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{
                        fontSize: 20,
                        marginBottom: 10,
                        color: 'rgb(74, 15, 15)',
                        textShadowOffset: { width: 1.5, height: 1.5 },
                        textShadowRadius: 4,
                        textShadowColor: 'rgba(0,0,0,0.75)',
                        alignSelf: 'center'
                    }}>
                        Primary Information
                    </Text>
                    <View style={styles.rowContainer}>
                        <View style={[styles.inputContainer, { flex: 0.5 }]}>
                            <Text style={[styles.label, {
                                color: 'rgb(74, 15, 15)',
                                textShadowOffset: { width: 1, height: 1 },
                                textShadowRadius: 3,
                                textShadowColor: 'rgba(0,0,0,0.75)',
                            }]}> First Name </Text>
                            <TextInput
                                style={[styles.input]}
                                onChangeText={setFirstName}
                                placeholder=""
                                value={firstName}
                            />
                            <Text style={[styles.label, {
                                color: 'rgb(74, 15, 15)',
                                textShadowOffset: { width: 1, height: 1 },
                                textShadowRadius: 3,
                                textShadowColor: 'rgba(0,0,0,0.75)',
                            }]}> Last Name </Text>
                            <TextInput
                                style={[styles.input]}
                                onChangeText={setLastName}
                                placeholder=""
                                value={lastName}
                            />
                        </View>
                        <View style={[styles.inputContainer, styles.avatarContainer]}>
                            <Avatar.Image source={{ uri: avatar }} size={85} />
                            <Icon
                                name='edit'
                                type='MaterialIcons'
                                style={[styles.avatarIcon, {}]}
                                onPress={handleAddAvatar}
                            />
                        </View>
                    </View>
                    <View style={[styles.inputContainer, {}]}>
                        <Text style={[styles.label, {
                            color: 'rgb(74, 15, 15)',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3,
                            textShadowColor: 'rgba(0,0,0,0.75)',
                        }]}> Email Address </Text>
                        <TextInput
                            style={[styles.input]}
                            onChangeText={setEmail}
                            placeholder=""
                            value={email}
                        />
                    </View>
                    <Button
                        onPress={postBtnHandle}
                        style={styles.button}
                        mode="contained"
                        labelStyle={{ color: 'rgb(74, 15, 15)' }}
                        color="#EAA443"
                    >
                        Set Information
                    </Button>
                    <Text style={{
                        fontSize: 20,
                        marginBottom: 10,
                        marginTop: 20,
                        color: 'rgb(74, 15, 15)',
                        textShadowOffset: { width: 1.5, height: 1.5 },
                        textShadowRadius: 4,
                        textShadowColor: 'rgba(0,0,0,0.75)',
                        alignSelf: 'center'
                    }}>
                        Password Settings
                    </Text>
                    <View style={[styles.inputContainer, {}]}>
                        <Text style={[styles.label, {
                            color: 'rgb(74, 15, 15)',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3,
                            textShadowColor: 'rgba(0,0,0,0.75)',
                        }]}> New Password </Text>
                        <TextInput
                            style={[styles.input]}
                            placeholder="Please Enter New Password"
                            secureTextEntry={true}
                            autoCompleteType="password"
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                    </View>
                    <View style={[styles.inputContainer, {}]}>
                        <Text style={[styles.label, {
                            color: 'rgb(74, 15, 15)',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3,
                            textShadowColor: 'rgba(0,0,0,0.75)',
                        }]}> New Password Confirmation</Text>
                        <TextInput
                            style={[styles.input]}
                            placeholder="Please Check New Password"
                            secureTextEntry={true}
                            autoCompleteType="password"
                            value={newPasswordConfirm}
                            onChangeText={setNewPasswordConfirm}
                        />
                    </View>
                    <Button
                        onPress={handleChangePassword}
                        style={styles.button}
                        mode="contained"
                        labelStyle={{ color: 'rgb(74, 15, 15)' }}
                        color="#EAA443"
                    >
                        Change Password
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
            </ScrollView>
        </ImageBackground>
    );
};

export default ProfileSettings;