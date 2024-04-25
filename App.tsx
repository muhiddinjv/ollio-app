import "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { InitApp } from "./src/wrapper/Init";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalState } from "./src/contexts/index";


function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <GlobalState>
          <InitApp />
        </GlobalState>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
