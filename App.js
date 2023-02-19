import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BaseNavigator from "./src/BaseNavigator";


export default function App() {

    return (

        <NavigationContainer>
            <BaseNavigator />
        </NavigationContainer>

    );

}
