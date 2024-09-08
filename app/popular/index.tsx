import JobComponent from "@/components/jobComponents"
import { ActivityIndicator, ScrollView, View } from "react-native"
import { useEffect, useState } from "react";
import { jobItems } from "../(home)/popularJob";
import { JOBEXAMPLE } from "../JOBS";
import { useGlobalContext } from "@/context/globalContext";

export default function JobsPages() {
    const { allJobs } = useGlobalContext()
    return (


        <>
            {
                allJobs.length === 0
                    ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size={'large'} />
                    </View>
                    : (<ScrollView contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 18, gap: 18, paddingTop: 18 }} showsVerticalScrollIndicator={false}>
                        {
                            allJobs?.map((job, key) => {
                                return <JobComponent data={job} key={job.id} />
                            })
                        }
                    </ScrollView>)
            }
        </>
    )
}