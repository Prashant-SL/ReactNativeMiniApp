import React from 'react';
import { Image, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Menubar from './Menubar';

const Home = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <View style={styles.mainTop}>
                    <Image resizeMode='cover' style={styles.topImage} source={require("../../assets/homebanner.jpeg/")} />
                    <Text style={{ fontSize: 26, textAlign: "center", marginTop: 20 }}>Welcome to</Text>
                    <Text style={{ fontSize: 20.5, textAlign: "center", marginTop: 5, color: "#1119EE", fontWeight: "600", textTransform: "uppercase" }}>Prashant Digital Solutions</Text>
                </View>
                <Text style={styles.paraStyle}>We are a IT company helping client's in globalizing their business with the Web development, Software development, App development, Social media marketing and 2D/3D/Animation videos. We have a very long and good list of clienteles across the globe.</Text>
                <Menubar text="Home" />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 5,
        textAlign: "center",
        marginTop: 80
    }, mainTop: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 10
    }, topImage: {
        borderWidth: 2,
        height: 250,
        width: "97%",
        alignSelf: "center",
        marginTop: 10,
        // aspectRatio: 2 / 1.7,
        borderRadius: 20
    }, paraStyle: {
        paddingHorizontal: 20,
        paddingTop: 10,
        lineHeight: 20,
    },
})