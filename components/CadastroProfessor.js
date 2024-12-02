// src/components/CadastroProfessor.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { database } from '../src/firebase';
import { ref, push } from 'firebase/database';

const CadastroProfessor = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [especializacao, setEspecializacao] = useState('');

    const handleSubmit = async () => {
        if (!nome || !email || !especializacao) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return;
        }

        try {
            const novoProfessor = { nome, email, especializacao };
            const professoresRef = ref(database, 'professores');

            await push(professoresRef, novoProfessor);
            setNome('');
            setEmail('');
            setEspecializacao('');
            Alert.alert("Sucesso", "Cadastro de professor realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar professor: ", error);
            Alert.alert("Erro", "Ocorreu um erro ao cadastrar o professor.");
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Cadastro de Professor</Text>
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
                placeholder="Especialização"
                value={especializacao}
                onChangeText={setEspecializacao}
                style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 }}
            />
            <Button title="Cadastrar" onPress={handleSubmit} />
        </View>
    );
};

export default CadastroProfessor;
