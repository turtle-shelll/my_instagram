import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Icons from '../reuseAbleComponents/Icons';
import { widthToDp } from "../utils/responcive"

export default function SearchBar() {
    return (
        <View style={styles.SearchBar}>
            <TextInput
                placeholder='Search any thing !'
                style={styles.inputStyle}
                placeholderTextColor={"grey"}
            />
            <Icons
                iconGrp={'Ionicons'}
                iconName={'search'}
                iconSize={30}
                // iconColor={"#e5e5e5"}
                iconStyle={{ position: "absolute", right: widthToDp(5), color: "grey" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: "#777777",
        width: "100%",
        padding: 5,
        position: "relative",
        alignItems: "flex-end",
        justifyContent: "center"

    },
    inputStyle: {
        backgroundColor: "#e5e5e5",
        borderRadius: 50,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: "600",
        width: "100%"
    }
});