import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Text } from 'react-native';
import CalculateTax from '../components/CalculateTax/CalculateTax';
import { StatusBar } from 'expo-status-bar';

const TaxCalculatorScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <StatusBar backgroundColor='#b2d8ff' />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Calculate Tax</Text>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <CalculateTax />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  headingContainer: {
    backgroundColor: '#b2d8ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', marginVertical: 25
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  content: {
    // // flexGrow: 1,
    // padding: 0,
  },
});

export default TaxCalculatorScreen;
