import { useGlobalContext } from "@/context/globalContext";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableNativeFeedback, View } from "react-native";
import { JOBEXAMPLE } from "../JOBS";

type Company = {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
}

export default function CompanyPage() {
    const [company, setCompany] = useState<Company[]>([])

    useEffect(() => {
        setTimeout(() => {
            const arr: Company[] = []

            JOBEXAMPLE.map((job) => {
                arr.push(job.company)
            })
            setCompany(arr)
        }, 1000)
    }, [])

    return (
        <ScrollView contentContainerStyle={{ gap: 16, paddingHorizontal: 18, paddingTop: 18 }}>

            {
                company.map((el, key) => <CompanyElement data={el} key={key} />)
            }
        </ScrollView>
    )
}

function CompanyElement({ data }: { data: Company }) {
    return (
        <TouchableNativeFeedback>
            <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                <View style={{ width: 50, aspectRatio: 1, borderRadius: 60, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>{data.name[0]}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>{data.name}</Text>
                    <Text>{data.contactEmail}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}