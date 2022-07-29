import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import APIData from './APIData';

const Users = () => {
    return (
        <View style={{ backgroundColor: "#FFF" }}>
            <Text style={styles.heading}>Users</Text>
            <FlatList data={APIData[1]} renderItem={({ item }) => {
                return (
                    <View style={styles.mainContainer}>
                        <Image style={styles.img} source={{ uri: item.image }} />
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.para}>{item.role}</Text>
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

export default Users;