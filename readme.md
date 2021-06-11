npm i
npx react-native link react-native-vector-icons

# do not forget to install pods for ios
cd ios / && pod install

# for iOS
npx react-native run-ios

# for Android

npx react-native run-android


# Backend API Base URL config
# App/Config/baseApi.js
baseUrl = 'http://192.168.104.56:8000';
# Replace baseUrl to the Laravel Backend Server Url