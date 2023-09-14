import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { COLORS, SIZES } from "../../../constants";
import RestaurantCard from "./restaurant/RestaurantCard";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const FeaturedCard = ({ title, id, description }) => {
  const router = useRouter();
  const [restaurantCard, setRestaurantCard] = useState([]);

  useEffect(() => {}, []);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon size={SIZES.s20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-500 text-xs">{description}</Text>
      <ScrollView
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Homers"}
          rating={3}
          genre={"Halaal"}
          address={"Lilongwe"}
          short_description={"Best pork and stuff"}
          dishes={"Alot"}
          long={22.1}
          lat={22.4}
        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Homers"}
          rating={3}
          genre={"Halaal"}
          address={"Lilongwe"}
          short_description={"Best pork and stuff"}
          dishes={"Alot"}
          long={22.1}
          lat={22.4}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedCard;
