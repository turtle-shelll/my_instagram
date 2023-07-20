import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Footer from '../components/footer';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.topView]}>
                <ScrollView>
                    <View>
                        <Text>ProfileScreen</Text>
                    </View>
                </ScrollView>
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