import { StyleSheet, Text, View } from "react-native";

export default function TargetComponents() {
    return (
        <View style={Styles.target_container}>
            <Target />
        </View>
    )
}


const Target = () => {
    return (
        <View style={Styles.target}>
            <Text>Full-time</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    target_container: {
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 16
    },
    target: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 20
    }
})