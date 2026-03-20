import { Stack } from 'expo-router';

export default function TestLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, 
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="myContact" options={{ title: 'Contact' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
    </Stack>
  );
}