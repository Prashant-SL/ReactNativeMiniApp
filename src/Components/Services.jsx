import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Services = ({ navigation }) => {
    return (
        <View>
            <Text>Services</Text>
            <Button title='Go back' onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})