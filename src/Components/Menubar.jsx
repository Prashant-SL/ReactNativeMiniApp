import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Menubar = ({ text }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home");
            }}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Courses");
            }}>
                <Text style={styles.text}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Users");
            }}>
                <Text style={styles.text}>Users</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Contact");
            }}>
                <Text style={styles.text}>Contact</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 50,
        borderWidth: .5,
        paddingVertical: 25
    },
    text: {
        borderWidth: .4,
        padding: 8,
        borderRadius: 9,
        color: "white",
        backgroundColor: "#11AA22"
    }
})

export default Menubar;