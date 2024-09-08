import JobComponent from "@/components/jobComponents"
import { ActivityIndicator, ScrollView, View } from "react-native"
import { useEffect, useState } from "react";
import { jobItems } from "../(home)/popularJob";
import { JOBEXAMPLE } from "../JOBS";

export default function JobsPages() {
    const [jobs, setJobs] = useState<jobItems[] | null>(null)

    useEffect(() => {
        setTimeout(() => {
            setJobs(JOBEXAMPLE)
        }, 1000)
    }, [])
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 50, paddingTop: 18 }}>

            <View style={{ paddingHorizontal: 18, gap: 16 }}>
                {
                    jobs === null
                        ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator size={'large'} />
                        </View>
                        : (<>
                            {
                                jobs?.map((job, key) => {
                                    return <JobComponent data={job} key={job.id} />
                                })
                            }
                        </>)
                }
            </View>
        </ScrollView>
    )
}