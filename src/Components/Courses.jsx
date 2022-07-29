import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import APIData from './APIData';

const Courses = () => {
    return (
        <View style={{ backgroundColor: "#FFF" }}>
            <Text style={styles.heading}>Courses We Teach!!!</Text>
            <FlatList data={APIData[0]} renderItem={({ item }) => {
                return (
                    <View style={styles.mainContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Image style={styles.img} source={{ uri: item.image }} />
                        <Text style={styles.para}>{item.description}</Text>

                        <TouchableOpacity onPress={() => Alert.alert("Success", `You have successfully joined the ${item.title} course`)}>
                            <Text style={styles.btn}>Join Course</Text>
                        </TouchableOpacity>
                    </View>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#EEE",
        padding: 10,
        margin: 10,
        borderWidth: .2,
        borderRadius: 10,
    },
    img: {
        width: "100%",
        height: 250,
        marginVertical: 25,
    },
    para: {
        paddingHorizontal: 10,
        fontSize: 15,
        lineHeight: 20,
    },
    btn: {
        backgroundColor: "#3b7",
        padding: 15,
        width: 130,
        borderRadius: 8,
        color: "white",
        alignSelf: "center",
        marginVertical: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        paddingTop: 20,
        color: "#590",
        fontWeight: "600",
        fontSize: 24
    },
    heading: {
        textAlign: "center",
        padding: 10,
        fontWeight: "400",
        color: "#12C",
        fontSize: 24,
        fontWeight: "400",
        textTransform: "uppercase"
    }
});

export default Courses;