import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import MoreNavigator from "./pages/MoreNavigator";


const Tab = createBottomTabNavigator();

export default function BaseNavigator() {

    return (
    
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="MoreNavigator" component={MoreNavigator} options={{ headerShown: false     }} />
        </Tab.Navigator>
        
    );
    
}
