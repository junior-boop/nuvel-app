import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function HeaderRight() {
    const handleClick = () => {
        console.log('je suis le user')
    }
    return (
        <TouchableOpacity onPress={handleClick}>
            <View style={Styles.avatar}>
                <AntDesign name="user" size={24} />
            </View>
        </TouchableOpacity>
    )
}


const Styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
        width: 38,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1'
    }
})