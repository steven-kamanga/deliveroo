import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { COLORS, SIZES } from "../../../constants";

const FeaturedCard = ({ title, id, description }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-500 text-xs">{description}</Text>
      <ScrollView
        className="pt4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SIZES.s15,
        }}
      ></ScrollView>
    </View>
  );
};

export default FeaturedCard;
