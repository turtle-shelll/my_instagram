import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import Footer from '../components/footer';
import ReelContainer from '../components/ReelContainer';
import Icons from '../reuseAbleComponents/Icons';
import { heightToDp, widthToDp } from '../utils/responcive';
const maxHeight = heightToDp(92);

export default function ReelsScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const viewabilityConfig = useRef(null);

    const reeldataArray = [
        {
            type: "reel",
            source: require("../assets/videos/vd1.mp4")
        },
        {
            type: "reel",
            source: require("../assets/videos/vd2.mp4")
        },
        {
            type: "reel",
            source: require("../assets/videos/vd3.mp4")
        },
        {
            type: "reel",
            source: require("../assets/videos/vd4.mp4")
        },
        {
            type: "reel",
            source: require("../assets/videos/vd5.mp4")
        },
    ];

    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.round(contentOffset.y / maxHeight);
        setCurrentIndex(index);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.topView]}>
                {/* <View style={{ position: "absolute", zIndex: 100, flexDirection: "row", justifyContent: "space-between", margin: 10, width: widthToDp(95) }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icons
                            iconGrp={'MaterialCommunityIcons'}
                            iconName={'keyboard-backspace'}
                            iconSize={32}
                            iconStyle={{ marginRight: widthToDp(2), color: "white" }}
                            iconColor={'#fff'} />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>Reels</Text>
                    </View>
                    <Icons
                        iconGrp={'Feather'}
                        iconName={'camera'}
                        iconSize={28}
                        iconStyle={styles.iconStyle}
                        iconColor={'#fff'} />
                </View> */}
                <FlatList
                    style={{ backgroundColor: "#202020", maxHeight: maxHeight, overflow: "hidden" }}
                    pagingEnabled={true}
                    data={reeldataArray}
                    ref={viewabilityConfig}
                    onScroll={handleScroll}
                    decelerationRate={'fast'}
                    // onViewableItemsChanged={handleViewableItemsChanged}
                    // viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
                    renderItem={({ item, index }) => {
                        return <ReelContainer video={item.source} playing={currentIndex != index} />;
                    }} />
                <Footer />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
    },
});