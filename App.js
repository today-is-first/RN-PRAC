import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import MenuOrderPage from './pages/MenuOrderPage';
import MenuSelectPage from './pages/MenuSelectPage';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

async function loadFonts() {
  await Font.loadAsync({
    Pretendard: require('./assets/fonts/Pretendard-Regular.ttf'),
    Sokcho: require('./assets/fonts/SokchoBadaDotum.ttf'),
  });
}

const Stack = createNativeStackNavigator();

const customStackNavigaionOptions = {
  headerShown: false,
};

const AppView = styled.View`
  margin: 0;
  flex: 1;
`;

export default function App() {
  loadFonts();
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppView>
          <Stack.Navigator
            initialRouteName={'MenuOrder'}
            screenOptions={customStackNavigaionOptions}
          >
            <Stack.Screen name="MenuSelect" component={MenuSelectPage} />
            <Stack.Screen name="MenuOrder" component={MenuOrderPage} />
          </Stack.Navigator>
        </AppView>
      </ThemeProvider>
    </NavigationContainer>
  );
}
