import { Stack } from "expo-router";
import { Text, View } from "react-native";
import HeaderLeft from "./_headerLeft";
import HeaderRight from "./_headerRight";

export default function HomeLayout() {
    return <Stack initialRouteName="Home" screenOptions={{
        headerTitle: '',
        contentStyle: {
            backgroundColor: 'white'
        },
        headerShadowVisible: false,
        headerLeft: headerLeft,
        headerRight: headerRight
    }} />
}

const headerLeft = () => {
    return <HeaderLeft />
}

const headerRight = () => {
    return <HeaderRight />
}