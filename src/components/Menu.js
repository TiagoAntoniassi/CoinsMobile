// src/components/Menu.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CadastroUsuario')}
            >
                <Text style={styles.buttonText}>Cadastro de Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CadastroProfessor')}
            >
                <Text style={styles.buttonText}>Cadastro de Professor</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Depositos')}
            >
                <Text style={styles.buttonText}>Depósitos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Extratos')}
            >
                <Text style={styles.buttonText}>Extratos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Saldos')}
            >
                <Text style={styles.buttonText}>Saldos</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F9', // Cor de fundo suave
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#28A745', // Verde para o título
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#28A745', // Verde para os botões
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 25,
        marginVertical: 10,
        shadowColor: '#28A745', // Sombra verde
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF', // Texto branco no botão
    },
});

export default Menu;
