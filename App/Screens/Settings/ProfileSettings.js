import * as React from 'react';
import {
    Image,
    View,
    Text,
    Button
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Card } from 'react-native-elements'

import styles from './ProfileSettingsStyle';
// import { useGlobals } from '../../contexts/Global';

const ProfileSettings = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={{ uri: "https://picsum.photos/108" }}
                    style={styles.avatar}
                />
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Liu Xing
                </Text>
                <Text style={{ fontSize: 15 }}>
                    user@gmail.com
                </Text>
            </View>
            <Card style={{ width: "100%" }}>
                <Text style={{ paddingBottom: 8, fontWeight: "bold" }}>
                    Profile
                </Text>
                <Text style={{ paddingBottom: 15, fontSize: 15 }}>
                    Edit Profile
                </Text>
                <Card.Divider style={{ width: "100%" }} />
            </Card>
        </SafeAreaView >
    );
};

export default ProfileSettings;