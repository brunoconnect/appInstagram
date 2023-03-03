import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Header from './src/Header'
import List from "./src/List";

function App() {
    const [feed, setFeed] =useState([
        {
            id: '1',
            nome: 'Bruno Staine',
            descricao: 'Mais um dia de muitos bugs',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
            imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
            likeada: true,
            likers: 1
        },
        {
            id: '2',
            nome: 'Guilherme',
            descricao: 'Mais um dia de muitos bugs',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
            imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
            likeada: true,
            likers: 2
        },
        {
            id: '3',
            nome: 'Carllos Eduardo',
            descricao: 'Mais um dia de muitos bugs',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
            imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
            likeada: true,
            likers: 3
        },
        {
            id: '4',
            nome: 'Davi',
            descricao: 'Mais um dia de muitos bugs',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
            imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
            likeada: true,
            likers: 4
        },
        {
            id: '5',
            nome: 'Marcelo',
            descricao: 'Mais um dia de muitos bugs',
            imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
            imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
            likeada: true,
            likers: 5
        },
    ])
    return (
        <View style={StyleSheet.container}>
            <Header/>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={ (item) => item.id}
                data={feed}
                renderItem={ ({item}) => <List data={item} />}
            />

            

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default App;