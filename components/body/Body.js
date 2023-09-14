import { ScrollView } from "react-native";
import Categories from "./categories/Categories";
import Featured from "./featured/Featured";
import { SIZES } from "../../constants";

const Body = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: SIZES.s200,
      }}
    >
      <Categories />
      <Featured />
    </ScrollView>
  );
};
export default Body;
