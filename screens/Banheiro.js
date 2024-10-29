import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const Banheiro = ({ navigation }) => {
  const [banhoValue, setBanhoValue] = useState(0);
  const [usoValue, setUsoValue] = useState(0);
  const [consumoMensalMetrosCubicos, setConsumoMensalMetrosCubicos] = useState(0);
  const [consumoDiarioMetrosCubicos, setConsumoDiarioMetrosCubicos] = useState(0);

  const litrosPorMinuto = 10; // Consumo em litros por minuto
  const metrosCubicosPorMinuto = litrosPorMinuto / 1000; // Conversão para metros cúbicos

  useEffect(() => {
    const metrosCubicosMensais = banhoValue * usoValue * metrosCubicosPorMinuto * 7; // Cálculo mensal
    setConsumoMensalMetrosCubicos(metrosCubicosMensais);
    const metrosCubicosDiarios = metrosCubicosMensais / 30; // Cálculo diário
    setConsumoDiarioMetrosCubicos(metrosCubicosDiarios);
  }, [banhoValue, usoValue]);

  const consumoDiarioLitros = consumoDiarioMetrosCubicos * 1000; // Conversão para litros
  const consumoMensalLitros = consumoMensalMetrosCubicos * 1000; // Conversão para litros

  const larguraBarra = (consumoDiarioLitros / 150) * 100; // Percentual da barra (150L é o consumo máximo recomendado)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Banheiro!</Text>
      <Text style={styles.subtitle}>Total per capita da habitação</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardText}>{consumoDiarioLitros.toFixed(2)} L / por Dia</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${Math.min(larguraBarra, 100)}%` }]} />
        </View>
      </View>

      <View style={styles.rangeContainer}>
        <View style={styles.row}>
          <Text style={styles.rangeLabel}>Banhos por semana</Text>
          <Text style={styles.rangeValue}>{banhoValue} banhos</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={banhoValue}
          onValueChange={(value) => setBanhoValue(value)}
          minimumTrackTintColor="#00BFFF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#2196F3"
        />
      </View>

      <View style={styles.rangeContainer}>
        <View style={styles.row}>
          <Text style={styles.rangeLabel}>Duração do banho</Text>
          <Text style={styles.rangeValue}>{usoValue} min</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={120}
          step={1}
          value={usoValue}
          onValueChange={(value) => setUsoValue(value)}
          minimumTrackTintColor="#00BFFF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#2196F3"
        />
      </View>

      <TouchableOpacity style={styles.confirmCard}>
        <Text style={styles.confirmText}>Confirma</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardText}>Consumo: {consumoMensalLitros.toFixed(2)} L/mês</Text>
      </View>

      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => navigation.navigate('Pia', { banhoValue })} // Passando piaValue para a tela Descarga
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
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
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
    alignItems: 'center',
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
    textAlign: 'center',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#76c7c0',
    borderRadius: 10,
  },
  rangeContainer: {
    width: '80%',
    marginVertical: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
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

export default Banheiro;
