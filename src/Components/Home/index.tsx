import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../Title';
import { Header } from '../Header';
import Footer from '../Footer';

export default function Home() {

    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.body}>
                <Title text='CodeShopping'></Title>
            </View>
            <View>
                <Footer/>
            </View>
        </View>
    )
} 