import { Text, TouchableOpacity, View } from "react-native";
import { jobItems } from "../popularJob";
import { Link } from "expo-router";


export default function HorizontalCard({ data, url = '' }: { data: jobItems, url?: string }) {
    return (
        <View>
            <Link
                // @ts-ignore
                href={{
                    pathname: '/details',
                    params: { id: url }
                }}>
                <View style={{ width: 250, borderWidth: 1, borderColor: '#dcdcdc', padding: 12, borderRadius: 7 }}>

                    <View style={{ marginBottom: 12 }}>
                        <View style={{ marginBottom: 12 }}>
                            <Text style={{ fontSize: 18, fontWeight: "700", color: '#434343' }}>{data.title}</Text>
                        </View>
                        <View style={{ marginBottom: 12 }}>
                            <Text>{data.description.length > 76 ? `${data.description.substring(0, 76)}...` : data.description}</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: '700' }}>{data.type} | {data.salary}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', borderTopColor: '#f2f2f2', borderTopWidth: 1, paddingTop: 14 }}>
                        <View style={{ width: 38, alignItems: 'center', justifyContent: 'center', aspectRatio: 1, borderRadius: 50, borderWidth: 1, borderColor: '#dcdcdc' }}>
                            <Text style={{ fontWeight: '700', fontSize: 18 }}>{data.company.name[0]}</Text>
                        </View>
                        <View>
                            <Text>{data.company.name}</Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', color: "#777" }}>{data.company.contactEmail}</Text>
                        </View>
                    </View>
                </View>
            </Link>
        </View>
    )
}


