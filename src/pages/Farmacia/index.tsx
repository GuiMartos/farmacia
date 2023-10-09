import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Topo from './components/Topo';
import Detalhe from './components/Detalhe';
import farmacia from '../../mocks/farmacia';


export default function Farmacia(){
    return <>
    <Topo titulo={farmacia.topo.titulo}/>
    <View style={estilos.farmacia}>
        <Detalhe
        titulofarmacia={farmacia.detalhes.titulofarmacia}
        nomeFramacia={farmacia.detalhes.nomeFarmacia}
        descricao={farmacia.detalhes.descricao}
        preco={farmacia.detalhes.preco}

        />
    </View>
    </>
}
const estilos= StyleSheet.create({

    farmacia:{
        paddingVertical:8,
        paddingHorizontal: 16
    },
})