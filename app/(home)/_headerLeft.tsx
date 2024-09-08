import { Text, View, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'

export default function HeaderLeft() {
    const handleClick = () => {
        console.log('je suis dasn la place')
    }
    return (
        <View>
            <TouchableOpacity onPress={handleClick}>
                <View>
                    <Entypo name="menu" size={24} />
                </View>
            </TouchableOpacity>
        </View>
    )
}