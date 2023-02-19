import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MoreNavigator from "./src/navigators/MoreNavigator";


export default function App() {

    return (

        <NavigationContainer>
            <MoreNavigator />
        </NavigationContainer>

    );

}
