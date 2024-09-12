import { View, ScrollView, SafeAreaView, Text, TouchableNativeFeedback } from "react-native";
import TargetComponents from "./components/target";
import GrandTitre from "@/components/grandTitre";
import HorizontaleScroll from "./components/horizontaleScroll";
import NearbyJob from "./components/nearbyJob";
import { useRouter } from "expo-router";
import CompanyItems from "./components/company.items";
import CompanyHorizontal from "./components/company.groupe";



export default function Home() {

    const router = useRouter()

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 20, color: '#888' }}>Hello, Daniel Seppo</Text>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>Find your perfect job</Text>
                </View>
                <View>
                    <GrandTitre titre="Popular Jobs" onClick={() => {
                        router.navigate('/popular')
                    }} />
                    <HorizontaleScroll />
                </View>
                <View style={{ marginBottom: 24 }}>
                    <GrandTitre titre="Nearby Jobs" onClick={() => {
                        router.navigate('/Jobs')
                    }} />
                    <NearbyJob />
                </View>
                <View>
                    <GrandTitre titre="Popular Company" onClick={() => {
                        router.navigate('/company')
                    }} />
                    <CompanyHorizontal />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

