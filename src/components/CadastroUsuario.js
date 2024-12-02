import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, useWindowDimensions } from 'react-native'; // Usando useWindowDimensions
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [turma, setTurma] = useState('');

    const { width } = useWindowDimensions(); // Captura a largura da tela dinamicamente

    const handleSubmit = async () => {
        if (!nome || !email || !turma) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return;
        }

        try {
            const novoUsuario = { nome, email, turma, coins: 0 };
            const usuariosRef = ref(database, 'usuarios');

            await push(usuariosRef, novoUsuario);
            setNome('');
            setEmail('');
            setTurma('');
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
            Alert.alert("Erro", "Ocorreu um erro ao cadastrar o usuário.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.formBox, { width: width * 0.9 }]}> {/* Usando largura dinâmica */}
                <Text style={styles.title}>Cadastro de Usuário</Text>
                <TextInput
                    placeholder="Digite seu nome"
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Digite sua turma"
                    value={turma}
                    onChangeText={setTurma}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F9', // Cor de fundo leve (bege claro)
        padding: 20,
    },
    formBox: {
        padding: 25,
        backgroundColor: '#FFFFFF', // Branco para o fundo do formulário
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#28A745', // Verde para bordas
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6, // Sombra para Android
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#28A745', // Cor verde para o título
        textAlign: 'center',
        marginBottom: 25,
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: '#28A745', // Verde nas bordas dos inputs
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#E8F5E9', // Verde claro para o fundo dos campos
        color: '#2A4D69', // Cor escura para o texto
    },
    button: {
        backgroundColor: '#28A745', // Cor verde para o botão
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#28A745', // Sombra verde para o botão
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF', // Texto branco no botão
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CadastroUsuario;
