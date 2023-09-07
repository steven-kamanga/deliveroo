import { ScrollView } from "react-native";
import Categories from "./Categories";
import Featured from "./Featured";

const Body = () => {
  return (
    <ScrollView>
      <Categories />
      <Featured />
    </ScrollView>
  );
};
export default Body;
