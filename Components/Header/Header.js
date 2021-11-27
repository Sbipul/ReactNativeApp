import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';



const Header = () => {
    return (
        <View style={tw`p-4 android:pt-2 text-white bg-blue-700 flex-row`}>
        <Text style={tw`text-white text-2xl`}>Time Hack</Text>
        </View>
    );
};

export default Header;