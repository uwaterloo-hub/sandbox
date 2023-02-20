import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import More from "../pages/More";


const Tab = createBottomTabNavigator();

export default function HomeNavigator() {

    return (
    
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "red" } }} >

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
        
    );
    
}
