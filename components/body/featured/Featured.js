import { View } from "react-native";
import FeaturedCard from "./FeaturedCard.1";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import client from "../../../sanity";

const Featured = () => {
  const router = useRouter();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    async function fetchFeaturedCategories() {
      const featured = await client.fetch(`*[_type == "featured"]{
        restaurants[]->{
          ...,
        }
      } `);
      setFeaturedCategories(featured);
    }
    fetchFeaturedCategories();
  }, []);

  // console.log(featuredCategories);

  return (
    <View className="px-4">
      {featuredCategories.map((featuredCategory) => (
        <FeaturedCard
          key={featuredCategory.featured._id}
          id={featuredCategory.featured._id}
          title={featuredCategory.featured.name}
          description={
            featuredCategory.featured.short_description ||
            featuredCategory.featured.shprt_description
          }
        />
      ))}
    </View>
  );
};

export default Featured;
