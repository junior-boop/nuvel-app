import { jobItems } from "@/app/(home)/popularJob";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function JobComponent({ data }: { data: jobItems }) {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => {
            router.navigate({ pathname: '/details', params: { id: data.id } })
        }}>
            <View style={{ flexDirection: 'row', gap: 12, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 16 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>{data.title}</Text>
                    <Text style={{ marginBottom: 7 }}>{data.description.length > 50 ? `${data.description.substring(0, 40)}...` : data.description}</Text>
                    <Text style={{ fontWeight: '700' }}>{data.type} | {data.salary}</Text>
                    <Text style={{ fontWeight: '700' }}>{data.location}</Text>
                </View>
                <View style={{ width: '25%', alignItems: "center" }}>
                    <View style={{ width: 62, aspectRatio: 1, borderRadius: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2', marginBottom: 7 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', color: "#777" }}>{data.company.name[0]}</Text>
                    </View>
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700' }}>{data.company.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}