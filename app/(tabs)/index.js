// app/index.js
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header.js';
import { useHeaderNavigation } from './headernavigation.js';

export default function Home() {
  const { handleHeaderButtonPress } = useHeaderNavigation();

  return (
    <View style={styles.container}>
      <Header onButtonPress={handleHeaderButtonPress} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Your Athlete App</Text>
        <Text style={styles.paragraph}>
          Your main app content goes here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  paragraph: {
    color: '#4B5563',
    fontSize: 16,
  },
});