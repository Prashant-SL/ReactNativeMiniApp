import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainTop}>
                <Image style={styles.topImage} source={{ uri: "https://via.placeholder.com/200x300" }} />
                <Text style={{ fontSize: 26, textAlign: "center", marginTop: 20 }}>Welcome to</Text>
                <Text style={{ fontSize: 26, textAlign: "center", marginTop: 5, color: "#2222AB", fontWeight: "600" }}>Prashant's Mini App</Text>
            </View>
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
        width: "100%",
        height: undefined,
        marginHorizontal: 40,
        marginTop: 100,
        aspectRatio: 1
    }
})