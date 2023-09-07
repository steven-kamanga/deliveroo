import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { COLORS, styles } from "../constants";

import Header from "../components/Header";
import Search from "../components/Search";
import Body from "../components/body/Body";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-white h-full ">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <Header />
      <Search />
      <Body />
    </SafeAreaView>
  );
};

export default Home;
