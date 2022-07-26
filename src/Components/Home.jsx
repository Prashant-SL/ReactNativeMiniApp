import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainTop}>
                <Image resizeMode='cover' style={styles.topImage} source={require("../../assets/homebanner.jpeg/")} />
                <Text style={{ fontSize: 26, textAlign: "center", marginTop: 20 }}>Welcome to</Text>
                <Text style={{ fontSize: 22, textAlign: "center", marginTop: 5, color: "#344555", fontWeight: "600", textTransform: "uppercase" }}>Prashant's Mini App</Text>
            </View>
            <Text style={styles.paraStyle}>Lorem Ipsum Random dummy content text to be written in the paragraph section. Lorem Ipsum Random dummy content text.</Text>
            <Button style={styles.btn} title='Go Back' onPress={() => navigation.navigate("Services")} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 2,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        textAlign: "center"
    },
    mainTop: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 10
    },
    topImage: {
        borderWidth: 2,
        // width: "90%",
        height: 300,
        // marginHorizontal: 40,
        marginTop: 100,
        aspectRatio: 2 / 1.7,
        borderRadius: 20
    },
    paraStyle: {
        paddingHorizontal: 20,
        paddingTop: 10,
        lineHeight: 20,
    },
    btn: {
        color: "red",
        borderRadius: 20,
        width: 100
    }
})