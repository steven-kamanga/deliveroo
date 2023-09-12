import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const Search = () => {
  return (
    <View className="flex-row items-center px-4 w-full space-x-2 pb-1">
      <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-2">
        <MagnifyingGlassIcon size={SIZES.s20} color={COLORS.gray} />
        <TextInput
          className="w-full"
          placeholder="restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity>
        <AdjustmentsHorizontalIcon size={SIZES.s20} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
