import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        mobile: ""
    });
    const handleSubmit = () => {
        console.log("Submit done bro");
    }
    return (
        <View>
            <Text>Enter Your Name</Text>
            <TextInput name="name" style={styles.inpt} />
            <Text>Enter Your Age</Text>
            <TextInput name="age" style={styles.inpt} />
            <Text>Enter Your Mobile Number</Text>
            <TextInput name="mobile" style={styles.inpt} />

            <TouchableOpacity onPress={() => handleSubmit()}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inpt: { borderWidth: .5, padding: 3 }
});

export default Contact;