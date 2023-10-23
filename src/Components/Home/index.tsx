import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../Title';
import { Header } from '../Header';
import FormProd from '../FormProd';

export default function Home() {

    return (
        <View style={styles.home}>
            <View style={styles.title}>
                <Title text='CodeShopping'></Title>
            </View>
            <View>
                <FormProd />
            </View>
        </View>
    )
} 