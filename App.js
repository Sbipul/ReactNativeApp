
import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Link,Routes } from "react-router-native";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


export default function App() {
  return (
    <NativeRouter>
      <Header/>
        <Home/>
      <Footer/>
    </NativeRouter>
  );
}

