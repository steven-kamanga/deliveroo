import { ScrollView } from "react-native";
import Categories from "./categories/Categories";
import Featured from "./featured/Featured";

const Body = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <Categories />
      <Featured />
    </ScrollView>
  );
};
export default Body;
