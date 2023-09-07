import { View, Text, TextInput } from "react-native";
import { COLORS, SIZES, styles } from "../constants";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const Search = () => {
  return (
    <View className={styles.searchContainer}>
      <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-2">
        <MagnifyingGlassIcon size={SIZES.s20} color={COLORS.gray} />
        <TextInput
          className="w-full"
          placeholder="restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsHorizontalIcon size={SIZES.s20} color={COLORS.primary} />
    </View>
  );
};

export default Search;
