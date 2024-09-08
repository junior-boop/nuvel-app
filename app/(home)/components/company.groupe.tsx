import { useGlobalContext } from "@/context/globalContext";
import { ScrollView } from "react-native";
import CompanyItems from "./company.items";
import { useRouter } from "expo-router";

export default function CompanyHorizontal() {
    const { allJobs } = useGlobalContext()
    const router = useRouter()

    const handleClick = () => {
        // router.navigate('')
        console.log('je suis la ')
    }
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
                allJobs.map((job, key) => <CompanyItems name={job.company.name} onClick={handleClick} key={key} />)
            }
        </ScrollView>
    )
}