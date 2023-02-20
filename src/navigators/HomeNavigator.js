import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";

import Home from "../pages/Home";
import More from "../pages/More";


const Tab = createBottomTabNavigator();

export default function HomeNavigator({ navigation }) {

    console.log("home")
    console.log(navigation)

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "home", title: "Home", focusedIcon: "heart", unfocusedIcon: "heart-outline" },
        { key: "more", title: "More", focusedIcon: "heart", unfocusedIcon: "heart-outline" }
    ]);
    const renderScene = BottomNavigation.SceneMap({
        "home": Home,
        "more": () => <More navigation={navigation} />
    });

    return (

        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
        
    );
    
}
