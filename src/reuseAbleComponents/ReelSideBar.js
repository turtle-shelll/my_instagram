import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icons from './Icons';

export default function ReelSideBar() {
    return (
        <View style={styles.ReelSideBar}>
            <View style={styles.iconBox}>
                <Icons
                    iconGrp={'AntDesign'}
                    iconName={'hearto'}
                    iconSize={28}
                    iconStyle={styles.iconStyle}
                    iconColor={'#fff'} />
                <Text style={styles.boxText}>225k</Text>
            </View>
            <View style={styles.iconBox}>
                <Icons
                    iconGrp={'AntDesign'}
                    iconName={'message1'}
                    iconSize={28}
                    iconStyle={styles.iconStyle}
                    iconColor={'#fff'} />
                <Text style={styles.boxText}>111k</Text>
            </View>
            <View style={styles.iconBox}>
                <Icons
                    iconGrp={'Feather'}
                    iconName={'send'}
                    iconSize={28}
                    iconStyle={styles.iconStyle}
                    iconColor={'#fff'} />
                <Text style={styles.boxText}>30.1k</Text>
            </View>
            <View style={styles.iconBox}>
                <Icons
                    iconGrp={'Entypo'}
                    iconName={'dots-three-vertical'}
                    iconColor={'#fff'}
                    iconSize={20} />
            </View>
            <View style={styles.songNameBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    ReelSideBar: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    iconBox: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    songNameBox: {
        backgroundColor: "#a9a9a999",
        width: 35,
        height: 35,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        borderWidth: 2,
        borderColor: "white"
    },
    boxText: {
        marginVertical: 7,
        fontWeight: "600",
        fontSize: 14,
        color: "white"
    },
    iconStyle: {
        marginHorizontal: 10,
    },
});