import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Header = ({ onButtonPress }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
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

  const handleButtonPress = (action) => {
    if (onButtonPress) {
      onButtonPress(action);
    }
  };

  return (
    <View style={{backgroundColor: '#5B21B6', padding: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8}}>
      {/* Greeting Section */}
      <View style={{marginBottom: 32}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 8}}>{getGreeting()}</Text>
        <View>
          <Text style={{fontSize: 18, color: '#E0E7FF'}}>{formatDate()}</Text>
          <Text style={{fontSize: 14, color: '#E0E7FF', opacity: 0.9}}>{formatTime()}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => handleButtonPress('Log Run')} style={buttonStyle}>
          <FontAwesome5 name="running" size={24} color="#fff" />
          <Text style={buttonTextStyle}>Log Run</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Start Workout')} style={buttonStyle}>
          <MaterialIcons name="fitness-center" size={24} color="#fff" />
          <Text style={buttonTextStyle}>Start Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Social')} style={buttonStyle}>
          <Feather name="users" size={24} color="#fff" />
          <Text style={buttonTextStyle}>Social</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Schedule')} style={buttonStyle}>
          <MaterialIcons name="calendar-today" size={24} color="#fff" />
          <Text style={buttonTextStyle}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const buttonStyle = {
  backgroundColor: 'rgba(255,255,255,0.15)',
  borderRadius: 16,
  padding: 16,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 4,
};

const buttonTextStyle = {
  color: '#fff',
  fontSize: 12,
  fontWeight: '500',
  marginTop: 6,
  textAlign: 'center',
};

export default Header;
