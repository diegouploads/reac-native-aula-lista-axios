import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#e1e1e1',
        margin: 12,
        padding: 10,
        borderWidth: 0.7,
        borderColor: '#c1c1c1',
        borderRadius: 10,
        flexDirection: 'row'
    },
    foto:{
        width:102,
        height:102,
    },
    detalhesItens:{
        marginLeft:20,
        flex:1
    },
    txtTitulo:{
        fontSize:18,
        color:'red',
        marginBottom:5
    },
    valor:{
        fontSize:16,
        fontWeight: 'bold',
    },
    txtDetalhes:{
        fontSize:15,
    }
})

class Itens extends Component {
    render() {
        const {foto, item, detalhesItens, txtTitulo, valor, txtDetalhes} = styles;
        return (
            <View style={item}>
                <View style={foto}>
                    <Image source={{ uri: this.props.item.foto }} style={{ height: 100, width: 100 }} />
                </View>
                <View style={detalhesItens}>
                    <Text style={txtTitulo}>{this.props.item.titulo}</Text>
                    <Text style={valor}>R$ {this.props.item.valor}</Text>
                    <Text style={txtDetalhes}>Local: {this.props.item.local_anuncio}</Text>
                    <Text style={txtDetalhes}>Data: {this.props.item.data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

export default Itens;