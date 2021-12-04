import * as React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

import * as Google from 'expo-auth-session/providers/google';


export default function Login({ navigation }) {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '////'
      });

    React.useEffect(() =>{
        if(response?.type==='success'){
          navigation.navigate('home',{auth:response.authentication})
      }
      
      },[response]);
      


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 300 }}>📖</Text>
            <Button
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:40}}
        title="ingresar con google"
        onPress={() => promptAsync()}
      />
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