import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { OPACITY, SIZES } from "../../../../constants";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        className="h-36 w-64 rounded-sm"
        source={{
          uri: imgUrl,
        }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={OPACITY.o0_5} size={SIZES.s22} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating} </Text>· {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={OPACITY.o0_4} size={SIZES.s22} />
          <Text className="text-gray-500 text-xs">Nearby · {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
