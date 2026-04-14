import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import "../global.css"
import { Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from "expo-router";

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
    
  );
}
export default RootLayout