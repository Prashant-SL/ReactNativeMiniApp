import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Menubar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home");
            }}>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Services");
            }}>
                <Text style={styles.text}>Services</Text>
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
        marginVertical: 50
    },
    text: {
        borderWidth: .4,
        padding: 6,
        borderRadius: 16
    }
})

export default Menubar;