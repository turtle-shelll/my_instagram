import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import { widthToDp } from '../utils/responcive';
import Video from 'react-native-video';
// import feedData from '../assets/mdm/SearchFeedData';
const { width, height } = Dimensions.get('window');
const thirdPart = width / 3;



export default function SearchRowGrid({ imagesAndVideo, rightSide }) {
    return (
        <View style={styles.SearchRowGrid}>
            {!rightSide && (
                <View style={{ width: thirdPart, height: (thirdPart * 2), borderWidth: 1, borderColor: "white" }}>
                    <Video source={imagesAndVideo[imagesAndVideo.length - 1].source} style={styles.backgroundVideo} repeat={true} resizeMode={'cover'} playInBackground={false} paused={false} />
                </View>
            )}
            <View style={{ width: (thirdPart * 2), backgroundColor: "black", flexDirection: "row", flexWrap: "wrap" }}>
                {imagesAndVideo.map((images, i) => {
                    if (images.type === "reel") return;
                    return (
                        <View key={i} style={{ width: thirdPart, height: thirdPart, backgroundColor: "#b5b5b555", borderWidth: 1, borderColor: "#d5d5d5" }}>
                            <Image source={images.source} resizeMode='cover' style={{ width: thirdPart, height: thirdPart }} />
                        </View>
                    );
                })}
            </View>
            {rightSide && (
                <View style={{ width: thirdPart, height: (thirdPart * 2), borderWidth: 1, borderColor: "white" }}>
                    <Video source={imagesAndVideo[imagesAndVideo.length - 1].source} style={styles.backgroundVideo} repeat={true} resizeMode='cover' playInBackground={false} paused={false} />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    SearchRowGrid: {
        width: widthToDp(100),
        flexDirection: "row"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});