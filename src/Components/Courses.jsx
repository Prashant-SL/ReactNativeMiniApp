import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import APIData from './APIData';

const Courses = ({ navigation }) => {
    return (
        <View>
            <Text>Courses</Text>
            <FlatList data={APIData} renderItem={({ item }) => {
                return (
                    <View style={styles.mainContainer}>
                        <Image />
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )
            }} />
            <Button title='Go back' onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default Courses;