import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { InputField } from '../../components/Imput';
import { styles } from './styles';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const EMAIL_CORRETO = 'usuario@email.com';
  const SENHA_CORRETA = '123456';

  const handleLogin = () => {
    const emailDigitado = email.trim();
    
    if (emailDigitado === EMAIL_CORRETO && password === SENHA_CORRETA) {
      onLoginSuccess();
    } else {
      Alert.alert('Erro de Autenticação', 'E-mail ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Boas-vindas de volta!</Text>
        <Text style={styles.subtitle}>
          Estamos muito animados em te ver novamente!
        </Text>
      </View>

      <View style={styles.formContainer}>
        <InputField
          label="E-mail ou número de telefone"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <InputField
          label="Senha"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />

        <Text style={styles.linkText}>Esqueceu sua senha?</Text>
        <Text style={styles.linkText}>Utilizar um gerenciador de senhas?</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};