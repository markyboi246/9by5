import { useRouter } from 'expo-router';

export function useHeaderNavigation() {
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
        // router.push('/schedule');
        console.log('Schedule navigation - create screen');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  return { handleHeaderButtonPress };
}