import React, { useState, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import { useGlobals } from '../../contexts/Global';

export default function Messages({ route }) {
    const [{ userInfo }, dispatch] = useGlobals();
    const { thread } = route.params
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
            user: {
                _id: 2,
                name: 'Demo'
            }
        }
    ])

    async function handleSend(messages = []) {
        const text = messages[0].text
        console.log(userInfo.id);
        console.log(messages);
        console.log(thread._id);
        firestore()
            .collection('MESSAGE_THREADS')
            .doc(thread._id)
            .collection('MESSAGES')
            .add({
                text,
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

    return (
        <GiftedChat
            messages={messages}
            onSend={handleSend}
            user={{
                _id: userInfo.id
            }}
        />
    )
}