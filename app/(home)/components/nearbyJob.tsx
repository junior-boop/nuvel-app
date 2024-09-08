import JobComponent from "@/components/jobComponents";
import { useGlobalContext } from "@/context/globalContext";
import { ActivityIndicator, View } from "react-native";

export default function NearbyJob() {

    const { nearlyJobs } = useGlobalContext()
    return (
        <View style={{ paddingHorizontal: 16, gap: 16 }}>
            {
                nearlyJobs.length === 0
                    ? <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size={'large'} />
                    </View>
                    : (<>
                        {
                            nearlyJobs.map((job, key) => {
                                if (key < 5) return <JobComponent data={job} key={job.id} />
                            })
                        }
                    </>)
            }
        </View>
    )
}