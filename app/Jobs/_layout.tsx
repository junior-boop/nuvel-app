import { Stack } from "expo-router";

export default function DetailsLayout() {
    return <Stack initialRouteName="Jobs" screenOptions={{
        headerTitle: 'All Jobs',
        contentStyle: {
            backgroundColor: 'white'
        },
        headerShadowVisible: false,
        // headerLeft: headerLeft,
        // headerRight: headerRight
    }} />

}