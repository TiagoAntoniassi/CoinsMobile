import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native';
import { database } from '../firebase'; // Certifique-se de que a configuração do Firebase está correta
import { ref, get, child, update } from 'firebase/database';

// Captura da largura da tela para tornar o layout responsivo
const { width, height } = Dimensions.get('window');

const Depositos = ({ userId }) => {
    const [valor, setValor] = useState('');

    const handleSubmit = async () => {
        // Validação para garantir que o campo não está vazio e o valor é positivo
        if (!valor || isNaN(valor) || parseFloat(valor) <= 0) {
            Alert.alert("Erro", "Por favor, insira um valor válido.");
            return;
        }

        try {
            // Acessando o banco de dados e recuperando o saldo atual do usuário
            const saldoRef = ref(database, 'usuarios/' + userId); // 'userId' deve ser passado como prop ou context
            const snapshot = await get(saldoRef);
            const userData = snapshot.val();

            if (userData) {
                const novoSaldo = parseFloat(userData.coins) + parseFloat(valor); // Adicionando o valor ao saldo existente

                // Atualizando o saldo do usuário no banco de dados
                await update(saldoRef, { coins: novoSaldo });

                // Limpar o campo de entrada
                setValor('');
                Alert.alert("Sucesso", `Depósito de ${valor} realizado com sucesso!`);
            } else {
                Alert.alert("Erro", "Usuário não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao realizar depósito: ", error);
            Alert.alert("Erro", "Ocorreu um erro ao realizar o depósito.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formBox}>
                <Text style={styles.title}>Realizar Depósito</Text>
                <TextInput
                    placeholder="Valor do depósito"
                    value={valor}
                    onChangeText={setValor}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Depositar</Text>
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
        width: width * 0.85, // Usando 85% da largura da tela
        maxWidth: 400, // Largura máxima para o formulário
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

export default Depositos;

