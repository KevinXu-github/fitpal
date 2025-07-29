import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a1a2e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'FitPal',
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="profile" 
        options={{ 
          title: 'Setup Profile',
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}