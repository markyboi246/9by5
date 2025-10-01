// components/header.js
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ onButtonPress }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = () => {
    return currentTime.toLocaleDateString([], { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.greetingSection}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
        <Text style={styles.date}>{formatDate()}</Text>
        <Text style={styles.time}>{formatTime()}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <ActionButton
          icon={<FontAwesome5 name="running" size={24} color="#fff" />}
          label="Log Run"
          onPress={() => onButtonPress?.('Log Run')}
        />
        <ActionButton
          icon={<MaterialIcons name="fitness-center" size={24} color="#fff" />}
          label="Workout"
          onPress={() => onButtonPress?.('Start Workout')}
        />
        <ActionButton
          icon={<Feather name="users" size={24} color="#fff" />}
          label="Social"
          onPress={() => onButtonPress?.('Social')}
        />
        <ActionButton
          icon={<MaterialIcons name="calendar-today" size={24} color="#fff" />}
          label="Schedule"
          onPress={() => onButtonPress?.('Schedule')}
        />
      </View>
    </View>
  );
};

const ActionButton = ({ icon, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.7}>
    {icon}
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5B21B6',
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  greetingSection: {
    marginBottom: 32,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    color: '#E0E7FF',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#E0E7FF',
    opacity: 0.9,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default Header;