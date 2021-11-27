import React from 'react';
import { View } from 'react-native';
import AllProducts from '../AllProducts/AllProducts';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <View>
            <Feature/>
            <AllProducts/>
        </View>
    );
};

export default Home;