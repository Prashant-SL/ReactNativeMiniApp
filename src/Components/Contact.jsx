import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

const Contact = ({ navigation }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [num, setNum] = useState("");
    const handleSubmit = () => {
        if (name.length <= 5) {
            Alert.alert("Small Name", "Your name should be of length more than 5");
        }
        else if (age < 18) {
            Alert.alert("Age Limit", "You are minor to enrol for the course");
        }
        else if (num.length != 10) {
            Alert.alert("Invalid Number", "The number should be of length 10");
        }
        else {
            Alert.alert("Successful", "You will be contacted shortly!!!");
            navigation.navigate("Home");
        }
    }
    return (
        <View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Enter Your Name</Text>
                <TouchableOpacity>
                    <TextInput name="name" style={styles.inpt} onChangeText={(e) => setName(e)} />
                </TouchableOpacity>
                <Text style={styles.label}>Enter Your Age</Text>
                <TouchableOpacity>
                    <TextInput name="age" style={styles.inpt} onChangeText={(e) => setAge(e)} />
                </TouchableOpacity>
                <Text style={styles.label}>Enter Your Mobile Number</Text>
                <TouchableOpacity>
                    <TextInput name="mobile" style={styles.inpt} onChangeText={(e) => setNum(e)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Text style={styles.btn}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    inpt: {
        borderWidth: .5,
        padding: 5,
        marginBottom: 20,
        borderRadius: 10
    },
    label: {
        color: "#55112299",
        paddingBottom: 5
    },
    btn: {
        color: "#dad",
        padding: 12,
        textAlign: "center",
        backgroundColor: "#111111",
        width: 100,
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 10
    },
    formContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "#fff"
    }
});

export default Contact;