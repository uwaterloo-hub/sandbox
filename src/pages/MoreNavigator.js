import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import More from "./More";
import Settings from "./Settings";


const Stack = createStackNavigator();

export default function MoreNavigator() {

    return (
    
        <Stack.Navigator>
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
        
    );
    
}
