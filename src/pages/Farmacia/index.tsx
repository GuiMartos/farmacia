import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import topo from '../../../assets/fundo.png';
import p1 from '../../../assets/p1.png';


const width = Dimensions.get('screen').width;

export default function Farmacia(){
    return <>
    <Image source={topo} style={estilos.topo}></Image>

    <Text style={estilos.titulo}>Itens</Text>

    <View style={estilos.farmacia}>

        <Text style={estilos.titulofarmacia}>Farmacia</Text>
        <View style={estilos.produto}>
            <Image style={estilos.imgFarmacia} source={p1}></Image>
            <Text style={estilos.nomeFarmacia}>Dorflex - 32 Comprimidos</Text>
        </View>
        <Text style={estilos.descricao}>Age na dor e relaxa, indicado para dores de cabeça
        e musculares. Pode ser um socorro nos seus dias de luta. 
        </Text>
        <Text style={estilos.preco}>R$ 39,90</Text>
    </View>
    </>
}
const estilos= StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width
    },
    titulo: {
        fontSize: 24, 
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "white",
        position: "absolute",
        padding: 16
    },
    titulofarmacia:{
        fontSize: 26,
        lineHeight: 46,
        color: "#001792",
        fontFamily: "MontserratBold"
    },
    farmacia:{
        paddingVertical:8,
        paddingHorizontal: 16
    },
    nomeFarmacia:{
        fontSize: 16,
        lineHeight:26,
        marginLeft: 12,
        fontWeight: "bold"
    },
    imgFarmacia:{
        width: 32,
        height: 32
    },
    produto:{
        flexDirection: "row",
        paddingVertical: 12
    },
    descricao:{
        color:"#a3a3a3",
        fontStyle: "italic"
    },
    preco:{
        fontSize: 22,
        lineHeight:50,
        color: "#229200",
        marginTop: 8
    }

})