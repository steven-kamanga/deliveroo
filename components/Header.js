import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";
import { View, Image, Text } from "react-native";
import { COLORS, SIZES, styles } from "../constants";

const Header = () => {
  return (
    <View className={styles.headerContainer}>
      <Image
        className="h-7 w-7 bg-gray-300 rounded-full"
        source={{
          uri: "https://links.papareact.com/wru",
        }}
      />

      <View className="flex-1">
        <Text className="font-bold text-gray-500 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon size={SIZES.s20} color={COLORS.primary} />
        </Text>
      </View>
      <UserIcon size={SIZES.s35} color={COLORS.primary} />
    </View>
  );
};

export default Header;
