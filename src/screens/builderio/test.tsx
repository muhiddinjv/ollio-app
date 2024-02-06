import { View, Text, Image } from "react-native";

function Test(props:any) {
  return (
    <View className="flex flex-col items-center mx-auto w-full bg-slate-100 max-w-[480px] rounded-[50px]">
      <View className="flex flex-col self-stretch w-full pt-8 bg-white shadow-lg whitespace-nowrap">
        <View className="flex flex-col w-full px-5 text-center">
          <View className="flex justify-between gap-5 text-sm font-semibold tracking-tight text-neutral-600">
            <View>
              <Text>9:41</Text>
            </View>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a73e53f5f42288d0a43f106d39e9377b4a2c9e30e7aa8301ebc4dbe835326e7b?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
              className="aspect-[5.56] w-[67px]"
            />
          </View>
          <View className="flex justify-between gap-5 pr-5 text-2xl font-medium text-blue-600 mt-7">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45be2a72b5a65653c7ad79044fe85bbf59755ebddd23a6df758fadcae25e79ad?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
              className="aspect-square w-[34px]"
            />
            <View className="flex-auto my-auto">
              <Text>Caissier</Text>
            </View>
          </View>
        </View>
        <View className="mt-4 w-full bg-neutral-300 min-h-[1px]" />
        <View className="z-10 flex items-center self-center justify-between gap-2 px-5 text-base text-slate-700">
          <View className="self-stretch my-auto grow">
            <Text>Tous les produits</Text>
          </View>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1609d2bdf92ee5f62d4a5a90f66f2a9454e77794552368dfed757e907e1c94e5?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
            className="self-stretch my-auto aspect-[1.75] stroke-[1px] stroke-slate-700 w-[7px]"
          />
          <View className="self-stretch w-px h-14 bg-neutral-300" />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc19b67d732377ff81ac289ff7e60e63969717e14c68700ec5d39c6bb01ef70?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
            className="self-stretch w-6 my-auto aspect-square"
          />
          <View className="self-stretch w-px h-14 bg-neutral-300" />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05b6792919e7d3a49c61552c5c21706245c6b659ff54deb92ebadb5fd174de7?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
            className="self-stretch w-6 my-auto aspect-square"
          />
          <View className="self-stretch w-px h-14 bg-neutral-300" />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e65aa00bf87d17cafe76db6cbe2f3dbc35ef0f008b9ab25d8f6894600913d5?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
            className="self-stretch w-6 my-auto aspect-square"
          />
        </View>
      </View>
      <View className="flex gap-3.5 justify-between items-center pr-4 mt-7 max-w-full font-medium bg-white rounded-3xl shadow-2xl text-slate-700 w-[327px]">
        <Image
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bbb6cd27fc28f4918ad40d45aa2a4e2d44fc2f2e1df5eca73d0e500637406bd?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
          className="self-stretch max-w-full aspect-[1.23] w-[106px]"
        />
        <View className="flex flex-col self-stretch flex-1 my-auto">
          <View className="text-sm">
            <Text>Wagyu Sate</Text>
          </View>
          <View className="mt-1.5 text-xs whitespace-nowrap">
            <Text>(Must choose level)</Text>
          </View>
          <View className="mt-2 text-base text-blue-600">
            <Text>$27.99</Text>
          </View>
        </View>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e700e3da957844d318f1a5439c8329985c8e6b28c6b3397a274bc193dbaf1f7?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
          className="self-stretch my-auto aspect-[1.05] w-[41px]"
        />
      </View>
      <View className="flex gap-3.5 justify-between items-center pr-4 mt-5 max-w-full font-medium whitespace-nowrap bg-white rounded-3xl shadow-2xl w-[327px]">
        <Image
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/060446a53b5ceb843565167dd2354431d207af5d09c611c9fda63506a7982a33?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
          className="self-stretch max-w-full aspect-[1.23] w-[106px]"
        />
        <View className="flex flex-col self-stretch flex-1 my-auto">
          <View className="text-sm text-slate-700">
            <Text>Wagyu Black Paper</Text>
          </View>
          <View className="mt-6 text-base text-blue-600">
            <Text>$20.99</Text>
          </View>
        </View>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55cda35e9ee379144571616265536435a92e62b36dd9cab1613035d45747e5de?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
          className="self-stretch my-auto aspect-[1.05] w-[41px]"
        />
      </View>
      <View className="flex gap-2.5 justify-between px-5 py-5 mt-60 w-full text-base font-medium text-white rounded-md shadow-2xl bg-[linear-gradient(225deg,#1A72DD_-15.95%,#0D62CA_88.4%)] max-w-[327px]">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b049208a0198629f6e5a24fb75fec8ca535883416f7b56935af0b03d28035fed?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
          className="w-6 aspect-[1.09]"
        />
        <View className="my-auto">
          <Text>8 éléments</Text>
        </View>
        <View className="self-start mt-2 text-right grow whitespace-nowrap">
          <Text>Total: GNF 200.00</Text>
        </View>
      </View>
      <View className="flex justify-center items-center self-stretch px-12 py-8 mt-9 w-full bg-white rounded-3xl border-solid shadow-2xl border-[0.2px] border-neutral-400">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd7f54a0bbba92b98f1f3506ee81cdec1de9d03e645a94c76f623ad460c5e80?apiKey=1ad04d760ad74fe58a37840a98486dd3&"
          className="aspect-[10] w-[282px]"
        />
      </View>
    </View>
  );
}

export default Test
