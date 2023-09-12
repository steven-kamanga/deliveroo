import { View, Text } from "react-native";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <View className="px-4">
      <FeaturedCard
        id={1}
        title={"Featured"}
        description={"Paid placements from our partners"}
      />
      <FeaturedCard
        id={2}
        title={"Tasty Discounts"}
        description={"Everyone's been enjoying these discounts!"}
      />
      <FeaturedCard
        id={3}
        title={"Offers near you!"}
        description={"Why not support your local restaurant tonight!"}
      />
    </View>
  );
};

export default Featured;
