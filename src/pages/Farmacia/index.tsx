import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Topo from './components/Topo';
import Detalhe from './components/Detalhe';



export default function Farmacia(){
    return <>
    <Topo/>
    <View style={estilos.farmacia}>
        <Detalhe/>
    </View>
    </>
}
const estilos= StyleSheet.create({

    farmacia:{
        paddingVertical:8,
        paddingHorizontal: 16
    },
})