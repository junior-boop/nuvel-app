import { ActivityIndicator, ScrollView, View } from "react-native";
import HorizontalCard from "./HorizontalCard";
import { useGlobalContext } from "@/context/globalContext";

export default function HorizontaleScroll() {
    const { allJobs } = useGlobalContext()


    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingVertical: 7, gap: 12
            }}
        >
            {
                allJobs.length === 0
                    ? <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size={'large'} />
                    </View>
                    : (<>
                        {
                            allJobs.map(job => <HorizontalCard data={job} key={job.id} url={job.id} />)
                        }
                    </>)
            }
        </ScrollView>
    )
}