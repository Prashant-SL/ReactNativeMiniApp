import React from 'react';
import { Image, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Menubar from './Menubar';

const Home = ({ navigation }) => {
    let arr = [{ name: "A", key: 1 }, { name: "B", key: 2 }, { name: "C", key: 3 }, { name: "D", key: 4 }, { name: "E", key: 5 }, { name: "F", key: 6 }];
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <View style={styles.mainTop}>
                    <Image resizeMode='cover' style={styles.topImage} source={require("../../assets/homebanner.jpeg/")} />
                    <Text style={{ fontSize: 26, textAlign: "center", marginTop: 20 }}>Welcome to</Text>
                    <Text style={{ fontSize: 22, textAlign: "center", marginTop: 5, color: "#1119EE", fontWeight: "600", textTransform: "uppercase" }}>Prashant's Mini App</Text>
                </View>
                <Text style={styles.paraStyle}>Lorem Ipsum Random dummy content text to be written in the paragraph section. Lorem Ipsum Random dummy content text.</Text>
                <Menubar />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 5,
        textAlign: "center",
        marginTop: 40
    }, mainTop: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 10
    }, topImage: {
        borderWidth: 2,
        height: 300,
        marginTop: 10,
        aspectRatio: 2 / 1.7,
        borderRadius: 20
    }, paraStyle: {
        paddingHorizontal: 20,
        paddingTop: 10,
        lineHeight: 20,
    },
})