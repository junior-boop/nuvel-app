import { ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableNativeFeedback, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getUniqueElement, jobItems } from "../(home)/popularJob";
import { LucideNavigation } from "@/components/icones";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

export default function DetailsPage() {
    const [jobinfo, setJobInfos] = useState<jobItems | null>(null)
    const { id } = useLocalSearchParams()

    useEffect(() => {
        const fetchdata = async () => {
            const data = await getUniqueElement(id as string)

            setTimeout(() => {
                setJobInfos(data)
            }, 1000)
        }

        fetchdata()
    }, [])

    if (jobinfo === null) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={'small'} />
            </View>
        )
    }
    return (

        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 24 }}>
                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ fontSize: 32, fontWeight: '400' }}>{jobinfo?.title}</Text>
                        <Text style={{ fontSize: 20, color: '#777' }}>{jobinfo?.type}</Text>
                    </View>

                    <DetailsInfos info={jobinfo?.location}>
                        <Entypo name="location" size={18} />
                    </DetailsInfos>
                    <DetailsInfos info={jobinfo?.salary}>
                        <FontAwesome5 name="dollar-sign" size={18} />
                    </DetailsInfos>

                </View>
                <View style={{ paddingBottom: 100, borderBottomWidth: 1, borderBottomColor: '#f2f2f2' }}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#444' }}>Job description</Text>
                    </View>
                    <Text style={{ fontSize: 16 }}>
                        {jobinfo?.description}
                    </Text>
                </View>
                <View style={{ paddingTop: 12 }}>
                    <View style={{ padding: 12, backgroundColor: "#f2f2f2", borderRadius: 7, flexDirection: 'row', gap: 12 }}>
                        <View style={{ backgroundColor: '#0002', width: '18%', aspectRatio: 1, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>{jobinfo?.company.name[0]}</Text>
                        </View>
                        <View style={{ paddingTop: 5, flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 5 }}>{jobinfo?.company.name}</Text>
                            <Text style={{ fontSize: 14, marginBottom: 10 }}>{jobinfo?.company.description.length > 80 ? `${jobinfo?.company.description.substring(0, 80)}...` : jobinfo?.company.description}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 30 }}>
                                    <Entypo name="old-phone" size={16} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', color: '#0009' }}>{jobinfo?.company.contactPhone}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 30 }}>
                                    <Entypo name="email" size={16} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', color: '#0009' }}>{jobinfo?.company.contactEmail}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View >
                <TouchableNativeFeedback>
                    <View style={{ backgroundColor: "#008cff", height: 56, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16 }}> Postuler </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </SafeAreaView>
    )
}


function DetailsInfos({ info, children }: { info: string, children: React.ReactNode }) {
    return (

        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 5 }}>
            <View style={{ width: 20, alignItems: 'center' }}>
                {children}
            </View>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>{info}</Text>
        </View>
    )
}