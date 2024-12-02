// src/components/Extratos.js

import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

// Captura da largura e altura da tela para tornar o layout mais fluido
const { width, height } = Dimensions.get('window');

const Extratos = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formBox}>
                <Text style={styles.title}>Extratos</Text>
                <Text style={styles.subtitle}>Aqui você pode visualizar todos os extratos de sua conta.</Text>
                {/* Aqui você pode adicionar mais conteúdo, como listas de extratos ou outras informações */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F7F7F9', // Cor de fundo suave
        padding: width * 0.05, // 5% da largura da tela
    },
    formBox: {
        width: width * 0.9, // Usando 90% da largura da tela
        maxWidth: 400, // Largura máxima para não ultrapassar um valor confortável
        padding: width * 0.05, // 5% da largura da tela para um padding fluído
        backgroundColor: '#FFFFFF', // Branco para o fundo do formulário
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#28A745', // Verde para bordas
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6, // Sombras para Android
    },
    title: {
        fontSize: width > 400 ? 22 : 18, // Ajuste da fonte dependendo do tamanho da tela
        fontWeight: '600',
        color: '#28A745', // Cor verde para o título
        textAlign: 'center',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: width > 400 ? 16 : 14, // Ajuste de fonte dependendo do tamanho da tela
        color: '#2A4D69', // Cor escura para o subtítulo
        textAlign: 'center',
    },
});

export default Extratos;
