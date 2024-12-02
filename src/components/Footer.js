// src/components/Footer.js

import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={{ padding: 20, alignItems: 'center' }}>
            <Text>&copy; {new Date().getFullYear()} Banco Digital para Alunos e Professores. Todos os direitos reservados.</Text>
        </View>
    );
};

export default Footer;
