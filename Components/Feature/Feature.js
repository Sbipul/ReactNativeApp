import React from 'react';
import { Image,View,Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Feature = () => {
    return (
        <View>
            <Image source={{uri: 'https://cdna.artstation.com/p/assets/images/images/031/586/906/large/murugendra-hiremath-00001212.jpg?1604034460',}} style={{ width: `100%`, height: 200 }}/>
        </View>
    );
};

export default Feature;