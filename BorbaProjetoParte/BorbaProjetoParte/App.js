import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Membros from './TelasMobile/Membros';
import Main from './TelasMobile/Main';
import Senhasrelatorio from './TelasMobile/Senhasrelatorio';
import Diariorelatorio from './TelasMobile/Diariorelatorio';
import Mensalrelatorio from './TelasMobile/Mensalrelatorio';
import Ultimassenhas from './TelasMobile/Ultimassenhas';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <View style={styles.container}>
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={Main} />
      <Stack.Screen name="Membros" component={Membros} />
      <Stack.Screen name="Relatório Senhas" component={Senhasrelatorio} />
      <Stack.Screen name="Relatório Diário" component={Diariorelatorio} />
      <Stack.Screen name="Relatório Mensal" component={Mensalrelatorio} />
      <Stack.Screen name="Últimas Senhas" component={Ultimassenhas} />
    </Stack.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
