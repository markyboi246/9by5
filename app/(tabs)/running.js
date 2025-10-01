import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header.js';

export default function Running() {
  const router = useRouter();

  const handleHeaderButtonPress = (action) => {
    console.log(`${action} button pressed`);
    
    switch(action) {
      case 'Log Run':
        router.push('/running');
        break;
      case 'Start Workout':
        router.push('/workout');
        break;
      case 'Social':
        router.push('/social');
        break;
      case 'Schedule':
        console.log('Schedule navigation');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  return (
    <View style={styles.container}>
      <Header onButtonPress={handleHeaderButtonPress} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Running Dashboard</Text>
        <Text style={styles.paragraph}>
          Track your runs, view stats, and log new activities here.
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