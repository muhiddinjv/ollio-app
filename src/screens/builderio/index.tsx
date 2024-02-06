import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function BuilderIo(props:any) {
  return (
    <View className="flex flex-col items-center pb-5 mx-auto w-full bg-white max-w-[480px]">
      <View className="flex gap-5 justify-between items-center px-5 mt-6 w-full text-base font-medium text-green-400 whitespace-nowrap max-w-[343px]">
        <View className="self-stretch my-auto">
          <Text>Back</Text>
        </View>
        <View className="self-stretch text-3xl font-semibold text-center text-black">
          <Text>Feed</Text>
        </View>
        <View className="self-stretch my-auto text-right">
          <Text>Filter</Text>
        </View>
      </View>
      <View className="justify-center items-start py-5 pr-16 pl-4 mt-10 max-w-full text-base font-medium whitespace-nowrap border border-gray-200 border-solid bg-neutral-100 rounded-[100px] text-stone-300 w-[343px]">
        <Text>Search</Text>
      </View>
      <View className="flex gap-4 items-start mt-4 w-full max-w-[343px]">
        <View className="rounded-lg bg-neutral-100 h-[50px] w-[50px]" />
        <View className="flex flex-col flex-1 px-5">
          <View className="flex gap-5 justify-between">
            <View className="text-base font-semibold text-black">
              <Text>Header</Text>
            </View>
            <View className="text-sm text-right text-stone-300">
              <Text>8m ago</Text>
            </View>
          </View>
          <View className="mt-3 text-sm text-black">
            <Text>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
          </View>
          <View className="shrink-0 mt-4 h-px bg-gray-200" />
        </View>
      </View>
      <View className="flex gap-4 items-start mt-4 w-full max-w-[343px]">
        <View className="rounded-lg bg-neutral-100 h-[50px] w-[50px]" />
        <View className="flex flex-col flex-1 px-5">
          <View className="flex gap-5 justify-between">
            <View className="text-base font-semibold text-black">
              <Text>Header</Text>
            </View>
            <View className="text-sm text-right text-stone-300">
              <Text>8m ago</Text>
            </View>
          </View>
          <View className="mt-3 text-sm text-black">
            <Text>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
          </View>
          <View className="shrink-0 mt-4 h-px bg-gray-200" />
        </View>
      </View>
      <View className="flex gap-4 items-start mt-4 w-full max-w-[343px]">
        <View className="rounded-lg bg-neutral-100 h-[50px] w-[50px]" />
        <View className="flex flex-col flex-1 px-5">
          <View className="flex gap-5 justify-between">
            <View className="text-base font-semibold text-black">
              <Text>Header</Text>
            </View>
            <View className="text-sm text-right text-stone-300">
              <Text>8m ago</Text>
            </View>
          </View>
          <View className="mt-3 text-sm text-black">
            <Text>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
          </View>
          <View className="shrink-0 mt-4 h-px bg-gray-200" />
        </View>
      </View>
      <View className="flex gap-4 items-start mt-4 w-full max-w-[343px]">
        <View className="rounded-lg bg-neutral-100 h-[50px] w-[50px]" />
        <View className="flex flex-col flex-1 px-5">
          <View className="flex gap-5 justify-between">
            <View className="text-base font-semibold text-black">
              <Text>Header</Text>
            </View>
            <View className="text-sm text-right text-stone-300">
              <Text>8m ago</Text>
            </View>
          </View>
          <View className="mt-3 text-sm text-black">
            <Text>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
          </View>
          <View className="shrink-0 mt-4 h-px bg-gray-200" />
        </View>
      </View>
      <View className="flex flex-col items-start pt-12 mt-4 w-full rounded-lg bg-zinc-100 max-w-[343px]">

      </View>
    </View>
  );
}
export default BuilderIo;

