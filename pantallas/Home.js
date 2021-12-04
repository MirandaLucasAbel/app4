import * as React from 'react';
import { useEffect, useState } from 'react';


import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';


import { getWordData } from '../servicios/Dictionaryapi'

import { Picker } from '@react-native-picker/picker';


export default function Home({ navigation }) {

    const [selectedLanguage, setSelectedLanguage] = useState();

    const [text, onChangeText] = useState('');

    const [data, setData] = useState(null);

    useEffect(() => {
        setSelectedLanguage('ES')
    }, []);

    const buscarPalabra = async () => {
        let idioma = selectedLanguage;
        let palabra = text;
        await getWordData(idioma, palabra)
            .then(response => {
                console.log(response);
                setData(response);
            }).catch((error) => console.error(error))
    };

    return (
        <View style={styles.container}>
            <Text>Diccionario 📚</Text>
            <View style={styles.containerBuscar}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="palabra a buscar"
                />
                <Picker
                    style={styles.input}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Español" value="ES" />
                    <Picker.Item label="Ingles" value="EN" />
                    <Picker.Item label="Frances" value="FR" />
                </Picker>
                </View>
            <Button
                title="🔍"
                onPress={buscarPalabra}
                color="#f194ff"
                style={styles.buscar}></Button>

            {!!data &&  <Text>{data[0].meanings[0].partOfSpeech}</Text> &&
             data[0].meanings[0].definitions.map((data, id) => {
                return <View key={id}>
                    <Text>{data.partOfSpeech}{"\n"}</Text>
                    <Text>definicion: {data.definition}{"\n"}</Text>
                    <Text>ejemplo: {data.example}{"\n"}{"\n"}</Text>
                </View>
            })}
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
        //flexDirection: 'row',
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
    buscar: {
       color:'#e0b94c',
        width: 20,
        margin: 12,
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
});