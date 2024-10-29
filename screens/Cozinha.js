import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const Cozinha = ({ navigation }) => {
  const [CozinhaValue, setCozinhaValue] = useState(0);
  const [usoValue, setUsoValue] = useState(0);

  // Cálculo do consumo mensal levando em consideração o tempo de uso
  const consumoMensal = ((CozinhaValue * 7 * 30) * (usoValue / 120)).toFixed(2); // Ajustado para incluir tempo de uso

  const handleConfirm = () => {
    // Passando os valores para a próxima tela
    navigation.navigate('FinalCozinha', {
      CozinhaValue,
      usoValue,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Cozinha!</Text>
      <Text style={styles.subtitle}>Total per capita da habitação</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardText}>0,0 L / por Dia</Text>
      </View>

      <View style={styles.rangeContainer}>
        <View style={styles.row}>
          <Text style={styles.rangeLabel}>Lavagem de louça</Text>
          <Text style={styles.rangeValue}>{CozinhaValue} por semana</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={CozinhaValue}
          onValueChange={(value) => setCozinhaValue(value)}
          minimumTrackTintColor="#00BFFF" // Cor da parte preenchida
          maximumTrackTintColor="#d3d3d3" // Cor da parte não preenchida
          thumbTintColor="#2196F3" // Cor da bolinha
        />
      </View>

      <View style={styles.rangeContainer}>
        <View style={styles.row}>
          <Text style={styles.rangeLabel}>Tempo aberto</Text>
          <Text style={styles.rangeValue}>{usoValue} min</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={120}
          step={1}
          value={usoValue}
          onValueChange={(value) => setUsoValue(value)}
          minimumTrackTintColor="#00BFFF" // Cor da parte preenchida
          maximumTrackTintColor="#d3d3d3" // Cor da parte não preenchida
          thumbTintColor="#2196F3" // Cor da bolinha
        />
      </View>

      <TouchableOpacity style={styles.confirmCard} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirma</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo: {consumoMensal} L/mês</Text>
      </View>

      <TouchableOpacity 
        style={styles.nextButton}
        onPress={handleConfirm} // Navegando para a tela FinalCozinha
      >
        <Text style={styles.nextButtonText}>Próximo</Text>
      </TouchableOpacity>
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
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centraliza o título
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center', // Centraliza o subtítulo
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
  confirmCard: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center', // Centraliza o texto do card
  },
  rangeContainer: {
    width: '80%',
    marginVertical: 20,
    alignItems: 'center', // Centraliza os componentes do range
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%', // Garante que a linha ocupe toda a largura
  },
  rangeLabel: {
    fontSize: 16,
  },
  rangeValue: {
    fontSize: 16,
  },
  slider: {
    width: '100%',
  },
  nextButton: {
    padding: 10,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  nextButtonText: {
    color: '#2196F3',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cozinha;
