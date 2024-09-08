import { Stack } from "expo-router";

export default function CompanyLayout() {
    return <Stack initialRouteName="Company" screenOptions={{
        headerTitle: 'All Company',
        contentStyle: {
            backgroundColor: 'white'
        },
        headerShadowVisible: false,
        // headerLeft: headerLeft,
        // headerRight: headerRight
    }} />
}