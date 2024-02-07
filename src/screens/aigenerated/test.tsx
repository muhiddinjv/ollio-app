import { View, Text, Image } from "react-native";

function TestAi(props: any) {
  return (
    <View className="w-auto h-screen relative bg-white">
      <Text className="left-[156px] top-[44px] absolute text-blue-600 text-xl font-medium font-Rubik">
        Log in
      </Text>
      <Text className="left-[24px] top-[114px] absolute text-slate-700 text-2xl font-medium font-Rubik">
        Welcome to MokPOS!
      </Text>
      <Text className="w-80 left-[24px] top-[150px] absolute text-slate-700 text-base font-normal font-Rubik">
        Select login as the owner or employee first to continue.
      </Text>
      <View className="left-[97px] top-[639px] absolute">
        <Text className="left-0 top-0 absolute text-slate-700 text-xs font-normal font-Rubik">
          Don't have an account?
        </Text>
        <Text className="left-[136px] top-0 absolute text-blue-600 text-xs font-medium font-Rubik underline">
          Sign Up
        </Text>
      </View>
      <View className="w-40 h-48 left-[107px] top-[238px] absolute opacity-50"></View>
      <View className="w-80 h-14 left-[24px] top-[475px] absolute">
        <View className="w-80 h-14 left-0 top-0 absolute bg-blue-600 rounded-2xl" />
        <Text className="left-[102px] top-[19px] absolute text-center text-white text-base font-medium font-Rubik">
          Log in as Owner
        </Text>
      </View>
      <View className="w-80 h-14 left-[24px] top-[570px] absolute">
        <View className="w-80 h-14 left-0 top-0 absolute bg-blue-600 rounded-2xl" />
        <Text className="left-[90px] top-[19px] absolute text-center text-white text-base font-medium font-Rubik">
          Log in as Employee
        </Text>
      </View>
      <Text className="left-[181px] top-[544px] absolute text-center text-slate-700 text-xs font-normal font-Rubik">
        Or
      </Text>
      <View className="w-5 h-5 left-[46px] top-[492px] absolute">
        <View className="w-2.5 h-3 left-[5.25px] top-0 absolute bg-white rounded-full" />
      </View>
      <Image
        className="w-5 h-5 left-[46px] top-[588px] absolute"
        source={{ uri: "https://via.placeholder.com/21x21" }}
      />
      <View className="left-[13px] top-[10px] absolute">
      

      </View>
      <View className="w-8 h-8 left-[24px] top-[40px] absolute">
        <View className="w-8 h-8 left-0 top-0 absolute bg-blue-600 rounded-lg" />
      </View>
    </View>
  );
}

export default TestAi;
