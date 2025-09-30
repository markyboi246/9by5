import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';

const App = () => {
  // Handle button presses from the header component
  const handleHeaderButtonPress = (action) => {
    console.log(`${action} button pressed`);
    
    // Add your navigation logic here based on the action
    switch(action) {
      case 'Log Run':
        // navigation.navigate('LogRun');
        break;
      case 'Start Workout':
        // navigation.navigate('StartWorkout');
        break;
      case 'Social':
        // navigation.navigate('Social');
        break;
      case 'Schedule':
        // navigation.navigate('Schedule');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Component */}
      <Header onButtonPress={handleHeaderButtonPress} />
      
      {/* Rest of your app content */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Your Athlete App</Text>
        <Text style={styles.paragraph}>
          Your main app content goes here. The header above will automatically update based on the time of day and handle button presses through the handleHeaderButtonPress function.
        </Text>
      </View>
    </View>
  );
};

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

export default App;