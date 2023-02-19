import React from "react";
import { Button, Text, View } from "react-native";


export default function More({ navigation }) {

    return (

        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>More Page</Text>
            <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
        </View>

    );

}
