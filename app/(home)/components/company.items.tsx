import { Text, TouchableNativeFeedback, View } from "react-native";

export default function CompanyItems({ name, onClick }: { name: string, onClick: () => void }) {
    return (
        <TouchableNativeFeedback onPress={onClick}>
            <View style={{ backgroundColor: '#ff005522', width: 120, height: 150, borderRadius: 7 }}>
                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 35, fontWeight: '700', color: '#6e0126' }}>{name[0]}</Text>
                </View>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={{ fontWeight: '700' }}>{name}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}