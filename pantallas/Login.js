import * as React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 300 }}>📖</Text>
            <Button
                title="Login"
                onPress={1}
                color="#f194ff"
                style={styles.input}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    containerBuscar: {
        flexDirection: 'row',
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});