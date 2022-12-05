import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export function DrawerContent(props) {
    return (
        <View style={styles.main}>
            <Text>This is a test.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})