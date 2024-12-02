import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, useWindowDimensions } from 'react-native'; // Usando useWindowDimensions
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const CadastroProfessor = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [especializacao, setEspecializacao] = useState('');

    const { width } = useWindowDimensions(); // Usando o hook para pegar a largura da tela dinamicamente

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
        <View style={styles.container}>
            <View style={[styles.formBox, { width: width * 0.9 }]}> {/* Usando a largura dinâmica */}
                <Text style={styles.title}>Cadastro de Professor</Text>
                <TextInput
                    placeholder="Nome completo"
                    placeholderTextColor="#8A9AA7"
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                />
                <TextInput
                    placeholder="E-mail institucional"
                    placeholderTextColor="#8A9AA7"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Área de especialização"
                    placeholderTextColor="#8A9AA7"
                    value={especializacao}
                    onChangeText={setEspecializacao}
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
        backgroundColor: '#F7F7F9', // Cor de fundo suave
        padding: 20,
    },
    formBox: {
        padding: 25,
        backgroundColor: '#FFFFFF', // Fundo branco para o formulário
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#28A745', // Cor verde para a borda
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6, // Sombras no Android
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#28A745', // Título em verde
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#28A745', // Borda verde
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#2A4D69', // Cor escura para o texto
        backgroundColor: '#E8F5E9', // Fundo verde claro
    },
    button: {
        backgroundColor: '#28A745', // Cor verde para o botão
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#28A745', // Sombra verde para o botão
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF', // Texto branco no botão
    },
});

export default CadastroProfessor;
