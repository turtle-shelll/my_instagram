import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
const DescriptionTop = () => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 35, height: 35, backgroundColor: "#a9a9a999", borderRadius: 35, borderWidth: 2, margin: 10, borderColor: "white" }}></View>
            <Text style={{ fontSize: 14, fontWeight: "700", color: "white" }}>Reel User Name</Text>
            <Pressable style={{ paddingHorizontal: 15, paddingVertical: 5, borderWidth: 2, borderRadius: 8, borderColor: "white", margin: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: "white" }}>Follow</Text>
            </Pressable>
        </View>
    )
}
const DescriptionContent = () => {
    return (
        <Pressable style={{ marginHorizontal: 10, marginVertical: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "white" }}>hello this is description of that post hope every one going to like it.</Text>
        </Pressable>
    )
}
const DescriptionLikeInfo = () => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10, marginVertical: 5 }}>
            <View style={{ flexDirection: "row", marginRight: 10, position: "relative" }}>
                <View style={styles.likePersonDP}></View>
                <View style={styles.likePersonDP}></View>
                <View style={styles.likePersonDP}></View>
            </View>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "white" }}>Followed by <Text style={{ fontWeight: "700" }}>userName</Text> & 7 others</Text>
        </View>
    )
}

export default function ReelsDescriptionContainer() {
    return (
        <View style={styles.ReelsDescriptionContainer}>
            <DescriptionTop />
            <DescriptionContent />
            <DescriptionLikeInfo />
            <View style={{}}>
                <Text style={[{ fontSize: 14, fontWeight: "500", color: "white" }, styles.songDescription]}>ReelsDescriptionContainer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ReelsDescriptionContainer: {
        width: "80%"
    },
    likePersonDP: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "blue",
    },
    songDescription: {
        backgroundColor: "#00000022",
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 15
    }
});