import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import ReelSideBar from '../reuseAbleComponents/ReelSideBar';
import ReelsDescriptionContainer from '../reuseAbleComponents/ReelsDescriptionContainer';
import Video from 'react-native-video';
import { heightToDp, widthToDp } from '../utils/responcive';

export default function ReelContainer({ video, playing }) {
    const [isPlaying, setIsPlaying] = useState(playing);
    useEffect(() => {
        setIsPlaying(playing);
    }, [playing]);
    return (
        <View style={styles.ReelContainer}>
            <Pressable onPress={() => { setIsPlaying(!isPlaying) }}>
                <Video source={video} playInBackground={false} accessible={true} style={styles.backgroundVideo} repeat={true} paused={isPlaying} resizeMode='contain' />
            </Pressable>
            <View style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
                <ReelsDescriptionContainer />
                <ReelSideBar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ReelContainer: {
        // backgroundColor: "red",
        position: "relative",
        height: heightToDp(92)
    },
    backgroundVideo: {
        width: widthToDp(100),
        height: heightToDp(92),
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});