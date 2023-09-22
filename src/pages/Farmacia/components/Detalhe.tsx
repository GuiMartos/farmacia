import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";
import p1 from '../../../../assets/p1.png';

export default function Detalhe(){
    return<>
<Text style={estilos.titulofarmacia}>Farmacia</Text>
        <View style={estilos.produto}>
            <Image style={estilos.imgFarmacia} source={p1}></Image>
            <Text style={estilos.nomeFarmacia}>Dorflex - 32 Comprimidos</Text>
        </View>
        <Text style={estilos.descricao}>Age na dor e relaxa, indicado para dores de cabeça
        e musculares. Pode ser um socorro nos seus dias de luta. 
        </Text>
        <Text style={estilos.preco}>R$ 39,90</Text>
    </>
}

const estilos= StyleSheet.create({
    titulofarmacia:{
        fontSize: 26,
        lineHeight: 46,
        color: "#001792",
        fontFamily: "MontserratBold"
    },
    nomeFarmacia:{
        fontSize: 20,
        lineHeight:26,
        marginLeft: 12,
        fontWeight: "bold"
    },
    imgFarmacia:{
        width: 120,
        height: 90
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