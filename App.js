import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MoreNavigator from "./src/navigators/MoreNavigator";
import { Provider as PaperProvider } from "react-native-paper";


export default function App() {

    return (
        <PaperProvider>
            <NavigationContainer>
                <MoreNavigator />
            </NavigationContainer>
        </PaperProvider>

    );

}
