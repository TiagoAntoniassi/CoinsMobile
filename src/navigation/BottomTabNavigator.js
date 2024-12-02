import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import Home from '../components/Home';
import CadastroUsuario from '../components/CadastroUsuario';
import CadastroProfessor from '../components/CadastroProfessor';
import Depositos from '../components/Depositos';
import Extratos from '../components/Extratos';
import Saldos from '../components/Saldos';
import Menu from '../components/Menu'; // Se necessário

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Cadastro de Usuário') {
                            iconName = 'person-add';
                        } else if (route.name === 'Cadastro de Professor') {
                            iconName = 'person';
                        } else if (route.name === 'Depósitos') {
                            iconName = 'cash';
                        } else if (route.name === 'Extratos') {
                            iconName = 'receipt';
                        } else if (route.name === 'Saldos') {
                            iconName = 'wallet';
                        }else if (route.name === 'Home') {
                            iconName = 'home';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#007bff',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { position: 'absolute', bottom: 0, left: 0, right: 0 }
                })}
            >
                <Tab.Screen name="Cadastro de Usuário" component={CadastroUsuario} />
                <Tab.Screen name="Cadastro de Professor" component={CadastroProfessor} />
                <Tab.Screen name="Depósitos" component={Depositos} />
                <Tab.Screen name="Extratos" component={Extratos} />
                <Tab.Screen name="Saldos" component={Saldos} />
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
