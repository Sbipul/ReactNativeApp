import React, { useEffect,useState } from 'react';
import { ScrollView,Image, Text, View,Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const AllProducts = () => {
    const [allProducts,setAllproducts] = useState([])

    useEffect(()=> {
        fetch('https://immense-falls-01294.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllproducts(data))
    },[])

    const onPressMe = id => {
        alert(`This watch price is $${id}`)
    }
    return (
        <ScrollView>
            {
                allProducts.map(products => <View style={tw`my-3  px-5`}  key={products?._id}>
                    <Text style={tw`text-blue-600 text-2xl`}>{products?.productName}</Text>
                    <Image source={{uri: products?.img,}} style={{ width: `100%`, height: 200 ,marginBottom : '5px'}}/>
                    <View style={tw`flex-row`}>
                    <Text style={tw`text-white text-2xl bg-blue-700 px-2 mr-5`}>${products?.price}</Text>
                    <Button onPress={()=>onPressMe(products?.price)} title="Order Now" accessibilityLabel="Learn more about this Simple Button"/>
                    </View>
                </View>)
            }
        </ScrollView>
    );
};

export default AllProducts;