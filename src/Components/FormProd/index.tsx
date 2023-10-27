import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import InputFofo from '../InputFofo';
import Produto from '../../Models/produtosModel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function FormProd() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [produto, setProduto] = useState<Produto>({} as Produto)
    
    function addProduto(nome: string, preco: string){ 
        produto.nome = nome;
        produto.preco = preco;     

        var newProdutos = [...produtos];
        newProdutos.concat(produto);

        setProdutos(newProdutos);
    }


    return (
        <View style={styles.container}>
            <InputFofo
                label='Nome:'
                placeholder='farinha'
                value={nome}
                setInput={(val) => setNome(val)}
            />
            <InputFofo
                label='Preço:'
                placeholder='3,50'
                value={preco}
                setInput={(val) => setPreco(val)}
            />
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => addProduto(nome, preco)}
                >
                    <Icon 
                        name='basket-plus'
                        size={40}
                        color={'#F0E68C'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}