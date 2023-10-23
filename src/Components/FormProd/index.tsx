import { useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function FormProd(){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    return (
        <View>
            <Text>Nome do Produto:</Text>
            <TextInput
                placeholder='farinha'
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />            
            <Text>Preço do Produto:</Text>
            <TextInput
                placeholder='3,50'
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                keyboardType='numeric'
            />
        </View>
    )
}