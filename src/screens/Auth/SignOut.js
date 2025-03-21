import React from "react";
import { useAuth } from "./AuthProvider";

const SignOutScreen = ({navigation}) => {
    const { signOut } = useAuth();
  
    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        signOut().then(() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'SignIn'}], // Reset to SignIn screen after signing out
          });
        });
      });
  
      return unsubscribe;
    }, [navigation, signOut]);
  
    return null; // This screen doesn't render anything
};
export default SignOutScreen;  