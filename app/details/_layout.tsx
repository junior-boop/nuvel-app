import { Stack } from "expo-router";

export default function DetailsLayout() {
    return <Stack initialRouteName="Details" screenOptions={{
        headerTitle: '',
        contentStyle: {
            backgroundColor: 'white'
        },
        headerShadowVisible: false,
        // headerLeft: headerLeft,
        // headerRight: headerRight
    }} />

}