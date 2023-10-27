import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../Title';
import { Header } from '../Header';
import FormProd from '../FormProd';

export default function Home() {

    return (
        <View style={styles.home}>
            <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FormProd />
            </View>
        </View>
    )
} 