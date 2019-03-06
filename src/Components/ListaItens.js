import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';


class ListaItens extends Component {

    constructor(props){
        super(props)

        this.state = {
            listaItens:[]
        };
    }

    componentWillMount(){
        //requisição http
        axios.get(url)
            .then((res)=>{
                this.setState({listaItens : res.data});
            }).catch(()=> {
                console.log('erro ao recuperar dados')
            });
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#fdfdfd'}}>
                {this.state.listaItens.map( item => (
                    <Itens key={item.titulo} item={item}></Itens>
                ))}
                
            </ScrollView>
        );
    }
}

export default ListaItens;