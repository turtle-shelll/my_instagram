import { View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import Footer from '../components/footer';
import SearchBar from '../components/SearchBar';
import SearchRowGrid from '../components/SearchRowGrid';
import { heightToDp } from '../utils/responcive';

const singleRowData = [
    [
        { type: "image", source: require("../assets/images/bg1.jpg") },
        { type: "image", source: require("../assets/images/bg2.jpg") },
        { type: "image", source: require("../assets/images/bg3.jpg") },
        { type: "image", source: require("../assets/images/bg4.jpg") },
        { type: "reel", source: require("../assets/videos/vd1.mp4") },
    ],
    [
        { type: "image", source: require("../assets/images/bg6.jpg") },
        { type: "image", source: require("../assets/images/bg5.jpg") },
        { type: "image", source: require("../assets/images/bg2.jpg") },
        { type: "image", source: require("../assets/images/bg1.jpg") },
        { type: "reel", source: require("../assets/videos/vd2.mp4") },
    ],
    [
        { type: "image", source: require("../assets/images/bg3.jpg") },
        { type: "image", source: require("../assets/images/bg4.jpg") },
        { type: "image", source: require("../assets/images/bg5.jpg") },
        { type: "image", source: require("../assets/images/bg6.jpg") },
        { type: "reel", source: require("../assets/videos/vd3.mp4") },
    ],
    [
        { type: "image", source: require("../assets/images/bg1.jpg") },
        { type: "image", source: require("../assets/images/bg2.jpg") },
        { type: "image", source: require("../assets/images/bg6.jpg") },
        { type: "image", source: require("../assets/images/bg5.jpg") },
        { type: "reel", source: require("../assets/videos/vd4.mp4") },
    ],
    [
        { type: "image", source: require("../assets/images/bg1.jpg") },
        { type: "image", source: require("../assets/images/bg2.jpg") },
        { type: "image", source: require("../assets/images/bg3.jpg") },
        { type: "image", source: require("../assets/images/bg4.jpg") },
        { type: "reel", source: require("../assets/videos/vd5.mp4") },
    ],
]

export default function SearchScreen() {
    let rightSide = false
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.topView]}>
                <SearchBar />
                <ScrollView nestedScrollEnabled={true} style={{ height: heightToDp(60), overflow: "hidden",marginBottom:heightToDp(8.5) }}>
                    {/* <FlatList
                        style={{ height: heightToDp(60), overflow: "hidden" }}
                        nestedScrollEnabled={true}
                        data={singleRowData}
                        renderItem={({ item, index }) => {
                            rightSide = !rightSide
                            return <SearchRowGrid imagesAndVideo={item} rightSide={rightSide} />
                        }}
                    /> */}
                    {singleRowData.map((item, index) => {
                        rightSide = !rightSide
                        return <SearchRowGrid imagesAndVideo={item} rightSide={rightSide} key={index} />
                    })}
                </ScrollView>
                <Footer />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
    },
});