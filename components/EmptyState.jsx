import CustomButton from "./CustomButton";
import { View, Text, Image } from "react-native";
import { images } from "../constants";
import { router } from "expo-router";
const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[270px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-sm text-gray-100">{subTitle}</Text>
      <Text className="text-xl font-psemibold text-white mt-2">{title}</Text>
      <CustomButton
        title={"Create video"}
        handlePress={() => router.push("/create")}
        containerStyles={"w-full my-5"}
      />
    </View>
  );
};

export default EmptyState;
