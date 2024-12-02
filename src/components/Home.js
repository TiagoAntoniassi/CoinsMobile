import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Banco Digital</Text>
            <Text style={styles.subtitle}>Escolha uma opção abaixo para continuar</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CadastroUsuario')} // Navega para a tela de Cadastro
            >
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')} // Navega para a tela de Login
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f9', // Cor de fundo suave
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#28A745', // Cor verde para o título
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#28A745', // Cor verde para o botão
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: '#28A745', // Sombra verde
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6, // Sombra para Android
    },
    buttonText: {
        color: '#FFFFFF', // Texto branco
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Home;
