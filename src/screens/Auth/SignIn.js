import * as React from "react"
import { Text, View, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TextInput, useTheme, Button as RNButton } from "react-native-paper"
import { AuthProvider, useAuth } from "."
import { setAccessToken, setRefreshToken, getAccessToken } from "./astorage"
import axiosInstance from "../../api/instance"

const LogOutButton = () => {
  const { signOut } = useAuth()
  return <Button title="Log Out" onPress={signOut} />
}

const LogInButton = () => {
  const { signIn } = useAuth()
  return <Button title="Log IN" onPress={() => signIn("my_token")} />
}

export default function SignIn({ navigation }) {
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState()
  const { status, userToken, signIn } = useAuth()
  const theme = useTheme()


  // React.useEffect(() => {
  //   const token = getAccessToken()
  //   console.log(token);

  //   if(token) {
  //     navigation.navigate('DrawerNav')
  //   }
  // }, [])

  const handleSignIn = async () => {  
    try {
      const response = await axiosInstance.post("auth/signin", { phoneNumber, password })
      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken)
      setRefreshToken(refreshToken)

      signIn(accessToken);
      console.log('object');
      navigation.navigate("DrawerNav")
      console.log('clicked sigin');
      return response.data
    } catch (error) {
      console.log({ error: error.response })
      setError(error?.response?.data?.message || [])
      setTimeout(() => setError([]), 5000)
    }
  }

  const findErrorForField = fieldName => {
    if (error !== undefined) {
      const fieldError = error?.find(err => err.field === fieldName)
      return fieldError ? fieldError.text : null
    }
  }

  return (
    <AuthProvider>
      <View className="flex-1 justify-center bg-gray-200">
        <SafeAreaView className="flex flex-grow justify-center p-16 dark:bg-slate-800">
          <View className="flex flex-1 items-center justify-center">
            {findErrorForField("phoneNumber") && (
              <Text className="text-red-500">
                {findErrorForField("phoneNumber")}
              </Text>
            )}
            <TextInput
              label="Phone"
              error={findErrorForField("phoneNumber") ? true : false}
              value={phoneNumber}
              keyboardType="number-pad"
              onChangeText={text => setPhoneNumber(text)}
              mode="outlined"
              className="mb-5 w-full dark:bg-slate-700"
              textColor={theme.colors.secondary}
            />
            {findErrorForField("password") && (
              <Text className="text-red-500">
                {findErrorForField("password")}
              </Text>
            )}
            <TextInput
              label="Password"
              error={findErrorForField("password") ? true : false}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={!showPassword}
              mode="outlined"
              textColor={theme.colors.secondary}
              className="mb-5 w-full dark:bg-slate-700"
              right={
                <TextInput.Icon
                  icon={`${showPassword ? 'eye-off' : 'eye'}`}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <RNButton
              mode="contained"
              onPress={handleSignIn}
              className="mb-5 w-full p-1 rounded"
              textColor="white"
            >
              Sign In
            </RNButton>
            <Text className="text-blue-500">Forgot Password?</Text>
          </View>
        </SafeAreaView>
      </View>
    </AuthProvider>
  )
}
