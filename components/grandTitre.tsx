import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GrandTitre({ titre, onClick }: { titre: string, onClick?: () => void }) {
    return (
        <View style={Styles.grandtitre_Container}>
            <Text style={Styles.grandtitre_text}>{titre} </Text>
            <TouchableOpacity onPress={onClick}>
                <View style={Styles.grandtitre_btn}>
                    <AntDesign name="right" size={18} color={'white'} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    grandtitre_Container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    grandtitre_btn: {
        backgroundColor: '#008cff',
        width: 34,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50

    },
    grandtitre_text: {
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase'
    }
})