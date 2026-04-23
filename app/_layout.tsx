import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import "../global.css"
import { Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>

  );
}
export default RootLayout