import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Contact = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [num, setNum] = useState("");
    const handleSubmit = () => {
        if (name.length <= 5) {
            Alert.alert("Validation Failed", "Username should be of length more than 5");
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
            <Text style={styles.heading}>Contact Form</Text>
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
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

/*

        <View style={{ marginTop: 40 }}>
            <Text>Contact us regarding any query to us via contact@prashant-sl.netlify.app</Text>
            <View style={styles.inputContainer}>
                <Text>Enter Your Email</Text>
                <TextInput style={styles.input} value={username} onChangeText={(data) => setUsername(data)} />
            </View>
            <View style={styles.inputContainer}>
                <Text>Enter Your Password</Text>
                <TextInput autoCorrect={false} secureTextEntry={true} style={[styles.input, styles.password]} value={password} onChangeText={(data) => setPassword(data)} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => submitData()}>
                <Text style={{ color: "white", padding: 5, textAlign: "center" }}>Submit</Text>
            </TouchableOpacity>
        </View>

const FormData = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitData = () => {
        
    }
    return (
        
*/

const styles = StyleSheet.create({
    inpt: { borderWidth: .5, padding: 3 },
    label: {
        color: "#55112299"
    }
});

export default Contact;