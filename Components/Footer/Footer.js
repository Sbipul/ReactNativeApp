import React from 'react';
import { ScrollView,Image, Text, View,Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Footer = () => {
    return (
        <View style={tw`bg-blue-600 p-3`}>
            <Text style={tw`text-white text-center text-xl`}>This is footer</Text>
        </View>
    );
};

export default Footer;