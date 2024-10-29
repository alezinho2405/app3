import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FinalLavanderia = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo da Lavanderia</Text>
      <Text style={styles.subtitle}>Consumo e dicas para economizar</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo: 120 L/mês</Text>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Dicas para economizar:</Text>
        <View style={styles.tips}>
          <Text style={styles.tipText}>1. Use o chuveiro por menos tempo.</Text>
          <Text style={styles.tipText}>2. Lave roupas com água fria sempre que possível.</Text>
          <Text style={styles.tipText}>3. Evite lavar roupas pequenas, faça isso em lotes maiores.</Text>
          <Text style={styles.tipText}>4. Se possível, reutilize a água da lavagem para outros usos.</Text>
        </View>
      </View>

      {/* Botão "Voltar para Home" */}
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')} // Navega para a tela 'Home'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
    width: '80%',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  cardText: {
    fontSize: 18,
  },

  // Estilos de dicas
  tipsContainer: {
    width: '80%',
    marginVertical: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  tips: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  tipText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default FinalLavanderia;