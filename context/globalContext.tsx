import { jobItems, nearbyJobs, popularJobs } from '@/app/(home)/popularJob'
import { createContext, useContext, useState, useEffect } from 'react'

const GlobaleContext = createContext<{
    allJobs: jobItems[],
    nearlyJobs: jobItems[]
}>({
    allJobs: [],
    nearlyJobs: []
})


export default function GlobaleContextProvider({ children }: { children: React.ReactNode }) {
    const [allJobs, setAllJobs] = useState<jobItems[]>([])
    const [nearlyJobs, setNearlyJob] = useState<jobItems[]>([])


    useEffect(() => {
        const fetchData = async () => {
            setAllJobs(await popularJobs())
            setNearlyJob(await nearbyJobs())
        }

        fetchData()
    }, [])

    return (
        <GlobaleContext.Provider value={{ allJobs, nearlyJobs }}>
            {children}
        </GlobaleContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobaleContext)