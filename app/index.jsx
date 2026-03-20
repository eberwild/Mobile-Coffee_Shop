import { Redirect } from 'expo-router';

// this will be the entry point for the programm
// after that we can decide where we want to start
export default function Index() {
  return <Redirect href="/(lists)" />
}


