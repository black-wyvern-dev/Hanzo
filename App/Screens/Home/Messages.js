import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Platform,
    Dimensions,
    PermissionsAndroid,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AudioRecorder, AudioUtils } from "react-native-audio";
import Sound from "react-native-sound";
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { Icon } from 'native-base';
import { Appbar } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import { useGlobals } from '../../contexts/Global';
import { postChatRes } from '../../apis/chatres';
import { baseUrl } from '../../Config/baseApi';

const ImagePicker = require("react-native-image-picker");

export default function Messages({ navigation, route }) {
    const [{ userInfo }, dispatch] = useGlobals();
    const { thread } = route.params;
    const [startAudio, setStartAudio] = useState(false);
    const [playAudio, setPlayAudio] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    const [checkedPermission, setCheckedPermission] = useState(false);
    const [messages, setMessages] = useState([
        {
            _id: 0,
            text: 'thread created',
            createdAt: new Date().getTime(),
            system: true
        },
        {
            _id: 1,
            text: 'hello!',
            createdAt: new Date().getTime(),
            image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
            user: {
                _id: 2,
                name: 'Demo'
            }
        }
    ]);
    const messageIdGenerator = () => {
        // generates uuid.
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    const [audioPath, setAudioPath] = useState(
        `${AudioUtils.DocumentDirectoryPath
        }/${messageIdGenerator()}test.aac`
    );
    const [audioSettings, setAudioSettings] = useState({
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        MeteringEnabled: true,
        IncludeBase64: true,
        AudioEncodingBitRate: 32000
    });
    // const [currentFile, setCurrentFile] = useState(undefined);
    // const [progress, setProgress] = useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const checkPermission = () => {
        if (Platform.OS !== "android") {
            return Promise.resolve(true);
        }
        const rationale = {
            title: "Microphone Permission",
            message:
                "AudioExample needs access to your microphone so you can record audio."
        };
        return PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            rationale
        ).then(result => {
            console.log("Permission result:", result);
            return result === true || result === PermissionsAndroid.RESULTS.GRANTED;
        });
    }

    const progressCallback = progressEvent => {
        const percentFraction = progressEvent.loaded / progressEvent.total;
        const percent = Math.floor(percentFraction * 100);
        // if (!progressFlag.includes('size')) {
        //     progressFlag.push('size');
        //     dispatch(S3Reducer.setUploadFileSize(progressEvent.total / 1000));
        // }
        console.log(`UploadFileSize: ${progressEvent.total / 1000}`);
        if (percent % 10 === 0 && !progressFlag.includes(percent)) {
            // progressFlag.push(percent);
            // dispatch(S3Reducer.setUploadProgress(percentFraction));
            console.log(`${precent}  ${percentFraction}`);
        }
        if (percentFraction === 1) {
            // dispatch(S3Reducer.setUploadStatus('processing'));
            console.log('processing');
        }
    };

    async function handleSend(messages = []) {
        const text = messages[0].text ?? '';
        const image = messages[0].image ?? '';
        const audio = messages[0].audio ?? '';
        console.log(userInfo.id);
        console.log(messages);
        console.log(thread._id);
        firestore()
            .collection('MESSAGE_THREADS')
            .doc(thread._id)
            .collection('MESSAGES')
            .add({
                text,
                image,
                audio,
                createdAt: new Date().getTime(),
                user: {
                    _id: userInfo.id,
                    displayName: userInfo.first_name + ' ' + userInfo.last_name,
                }
            })
        await firestore()
            .collection('MESSAGE_THREADS')
            .doc(thread._id)
            .set(
                {
                    latestMessage: {
                        text,
                        image,
                        audio,
                        createdAt: new Date().getTime()
                    }
                },
                { merge: true }
            )
        // setMessages(GiftedChat.append(messages, newMessage))
    }

    useEffect(() => {
        const unsubscribeListener = firestore()
            .collection('MESSAGE_THREADS')
            .doc(thread._id)
            .collection('MESSAGES')
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                const messages = querySnapshot.docs.map(doc => {
                    const firebaseData = doc.data()
                    const data = {
                        _id: doc.id,
                        text: '',
                        image: '',
                        audio: '',
                        createdAt: new Date().getTime(),
                        ...firebaseData
                    }

                    if (!firebaseData.system) {
                        data.user = {
                            ...firebaseData.user,
                            name: firebaseData.user.displayName
                        }
                    }

                    return data
                })

                setMessages(messages)
            })

        return () => unsubscribeListener()
    }, [])

    useEffect(() => {
        if (checkedPermission) return;

        checkPermission().then(hasPermission => {
            setHasPermission(hasPermission);
            if (!hasPermission) return;
            prepareRecord();
        });
    }, [checkedPermission])

    const prepareRecord = async () => {
        await AudioRecorder.prepareRecordingAtPath(
            audioPath,
            audioSettings
        );
        AudioRecorder.onProgress = data => {
            console.log(data, "onProgress data");
        };
        AudioRecorder.onFinished = data => {
            console.log(data, "on finish");
        };
    };

    const handleAddPicture = () => {
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
            console.log("Response = ", response);
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

                const file = {
                    uri,
                    name: `${messageIdGenerator()}.${extension}`,
                    type: correspondingMime[allowedExtensions.indexOf(extension)]
                };

                console.log(file);

                console.log('uploading');

                const { data, errors } = await postChatRes(file, progressCallback, userInfo.token);
                if (errors) return;
                console.log('uploaded success');

                const message = {};
                // message._id = this.messageIdGenerator();
                // message.createdAt = Date.now();
                // message.user = {
                //     _id: user._id,
                //     name: `${user.firstName} ${user.lastName}`,
                //     avatar: user.avatar
                // };
                message.text = '';
                message.image = baseUrl + data;
                message.audio = '';
                // message.messageType = "image";
                handleSend([message]);

                // this.chatsFromFB.update({
                //     messages: [message, ...this.state.messages]
                // });
                // });
                // if (!allowedExtensions.includes(extension)) {
                //     return alert("That file type is not allowed.");
                // }
            }
        });
    };

    const handleAudio = async () => {
        // const { user } = this.props;
        if (!hasPermission) {
            Alert.alert('Check your audio permission');
            return;
        }
        if (!startAudio) {
            setStartAudio(true);
            try {
                await AudioRecorder.startRecording();
            } catch (e) {
                console.log(e);
            }
            console.log('record start');
        } else {
            setStartAudio(false);
            await AudioRecorder.stopRecording();
            console.log('record end');

            const fileName = `${messageIdGenerator()}.aac`;
            const file = {
                uri: Platform.OS === "ios" ? audioPath : `file://${audioPath}`,
                name: fileName,
                type: `audio/aac`
            };

            console.log('uploading');

            const { data, errors } = await postChatRes(file, progressCallback, userInfo.token);
            if (errors) return;
            console.log('uploaded success');
            const message = {};
            message.text = "";
            message.image = "";
            message.audio = baseUrl + data;
            handleSend([message]);
        }
    };

    const renderAndroidMicrophone = () => {
        if (Platform.OS === "android") {
            return (
                <Ionicons
                    name="ios-mic"
                    size={35}
                    hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                    color={startAudio ? "red" : "black"}
                    style={{
                        bottom: 50,
                        right: Dimensions.get("window").width / 2 - 17,
                        position: "absolute",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.5,
                        zIndex: 2,
                        backgroundColor: "transparent"
                    }}
                    onPress={handleAudio}
                />
            );
        }
    }

    const renderName = props => {
        const { user = {} } = props.currentMessage;
        const { user: pUser = {} } = props.previousMessage;
        const isSameUser = pUser._id === user._id;
        const shouldNotRenderName = isSameUser;
        let firstName = user.name.split(" ")[0];
        let lastName = "";
        if (user.name.split(" ")[1])
            lastName = user.name.split(" ")[1][0];
        return shouldNotRenderName ? (
            <View />
        ) : (
            <View>
                <Text style={{ color: "grey", padding: 2, alignSelf: "center" }}>
                    {`${firstName} ${lastName}.`}
                </Text>
            </View>
        );
    };

    const renderAudio = props => {
        return !props.currentMessage.audio ? (
            <View />
        ) : (
            <Ionicons
                name="ios-play"
                size={35}
                color={playAudio ? "red" : "blue"}
                style={{
                    left: 90,
                    position: "relative",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    backgroundColor: "transparent"
                }}
                onPress={() => {
                    setPlayAudio(true);
                    const sound = new Sound(props.currentMessage.audio, "", error => {
                        if (error) {
                            console.log("failed to load the sound", error);
                        }
                        sound.play(success => {
                            console.log(success, "success play");
                            if (!success) {
                                Alert.alert("There was an error playing this audio");
                            }
                        });
                        setPlayAudio(false);
                    });
                }}
            />
        );
    };

    const renderBubble = props => {
        return (
            <View>
                {renderName(props)}
                {renderAudio(props)}
                <Bubble {...props} />
            </View>
        );
    };

    return (
        <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
            <SafeAreaView style={[styles.container]}>
                <Appbar.Header
                    style={{
                        marginTop: 30,
                        backgroundColor: 'rgb(234, 164, 67)',
                        width: '100%'
                    }}
                >
                    <Appbar.BackAction
                        onPress={navigation.goBack}
                        color={'#4F0F0F'}
                    />
                    <Appbar.Content
                        title={"Message"}
                        titleStyle={{
                            fontSize: 26,
                            fontFamily: 'Bradleys Pen',
                            // color: theme.colors.primary,
                            color: '#4F0F0F',
                            alignSelf: 'center',
                        }}
                    />
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => {
                            // superNavigation.openDrawer();
                        }}
                    >
                        <Icon
                            name='add-a-photo'
                            type='MaterialIcons'
                            style={{
                                fontSize: 20,
                                marginRight: 10,
                                // color: theme.colors.primary
                                color: '#4F0F0F',
                            }}
                            onPress={
                                () => {
                                    // console.log('CreateChatRoom');
                                    handleAddPicture();
                                }
                            }
                        />
                    </TouchableOpacity>
                </Appbar.Header>
                <View style={{ width: '100%', flex: 1 }}>
                    {renderAndroidMicrophone()}
                    <GiftedChat
                        messages={messages}
                        onSend={handleSend}
                        renderBubble={renderBubble}
                        renderActions={() => {
                            if (Platform.OS === "ios") {
                                return (
                                    <Ionicons
                                        name="ios-mic"
                                        size={35}
                                        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                                        color={startAudio ? "red" : "black"}
                                        style={{
                                            bottom: 50,
                                            right: Dimensions.get("window").width / 2 - 35,
                                            position: "absolute",
                                            shadowColor: "#000",
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.5,
                                            zIndex: 2,
                                            backgroundColor: "transparent"
                                        }}
                                        onPress={handleAudio}
                                    />
                                );
                            }
                        }}
                        user={{
                            _id: userInfo.id,
                            name: `${userInfo.firstName} ${userInfo.lastName}`,
                        }}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
})
