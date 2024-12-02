import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'; // Adicione isso se não estiver presente

// Importação dos componentes
import Home from './src/components/Home';
import CadastroUsuario from './src/components/CadastroUsuario';
import CadastroProfessor from './src/components/CadastroProfessor';
import Depositos from './src/components/Depositos';
import Extratos from './src/components/Extratos';
import Saldos from './src/components/Extratos';
//import Menu from './src/components/Menu'; // Se necessário

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Cadastro de Usuário') {
                            iconName = 'person-add'; // Altere para o ícone desejado
                        } else if (route.name === 'Cadastro de Professor') {
                            iconName = 'person'; // Altere para o ícone desejado
                        } else if (route.name === 'Depósitos') {
                            iconName = 'cash'; // Altere para o ícone desejado
                        } else if (route.name === 'Extratos') {
                            iconName = 'receipt'; // Altere para o ícone desejado
                        } else if (route.name === 'Saldos') {
                            iconName = 'wallet'; // Altere para o ícone desejado
                        } else if (route.name === 'Home') {
                            iconName = 'home'; // Altere para o ícone desejado
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#007bff',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { position: 'absolute', bottom: 0, left: 0, right: 0 }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cadastro de Usuário" component={CadastroUsuario} />
                <Tab.Screen name="Cadastro de Professor" component={CadastroProfessor} />
                <Tab.Screen name="Depósitos" component={Depositos} />
                <Tab.Screen name="Extratos" component={Extratos} />
                <Tab.Screen name="Saldos" component={Saldos} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
