// src/components/CadastroUsuario.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { database } from '../src/firebase';
import { ref, push } from 'firebase/database';

const CadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [turma, setTurma] = useState('');

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
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Cadastro de Usuário</Text>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="Turma"
                value={turma}
                onChangeText={setTurma}
                style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 }}
            />
            <Button title="Cadastrar" onPress={handleSubmit} />
        </View>
    );
};

export default CadastroUsuario;
