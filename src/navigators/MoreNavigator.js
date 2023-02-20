import React from "react";
import Settings from "../pages/Settings";
import HomeNavigator from "./HomeNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { FadeFromRight } from "./FadeFromRightPreset";


const Stack = createStackNavigator();

export default function MoreNavigator() {

    return (

        <Stack.Navigator screenOptions={{ ...FadeFromRight }}>

            <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>

    );

}
