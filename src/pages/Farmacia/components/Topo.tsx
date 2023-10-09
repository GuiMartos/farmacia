import React from "react";
import{Image, Text, StyleSheet,Dimensions} from "react-native"
import topo from '../../../../assets/fundo.png';

const width = Dimensions.get('screen').width;

type Props = {
    titulo: string
}


export default function Topo({titulo}: Props){
    return<>
    <Image source={topo} style={estilos.topo}></Image>
    <Text style={estilos.titulo}>{titulo}</Text>
    </>
}

const estilos= StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width
    },
    titulo: {
        fontSize: 22, 
        fontWeight: "bold",
        lineHeight: 14,
        width: "100%",
        textAlign: "center",
        color: "white",
        position: "absolute",
        padding: 16
    },
})