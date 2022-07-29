import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import APIData from './APIData';

const Courses = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#FFF" }}>
            <Text>Courses We Teach!!!</Text>
            <FlatList data={APIData} renderItem={({ item }) => {
                return (
                    <View style={styles.mainContainer}>
                        <Text>{item.title}</Text>
                        <Image style={styles.img} source={{ uri: item.image }} />
                        <Text style={styles.para}>{item.description}</Text>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
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
        backgroundColor: "#EEEEEE",
        padding: 10,
        margin: 10
    },
    img: {
        width: "100%", height: 250, marginVertical: 25,
    },
    para: {
        paddingHorizontal: 10,
        fontSize: 15,
        lineHeight: 20,
    },
    btn: {
        backgroundColor: "#3b0",
        padding: 10,
        width: 130,
        borderRadius: 8,
        color: "white",
        alignSelf: "center",
        marginVertical: 15,
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default Courses;