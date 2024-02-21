import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './components/Header';
import Shop from './components/Shop';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    Pretendard: require('./assets/fonts/Pretendard-Regular.ttf'),
    Sokcho: require('./assets/fonts/SokchoBadaDotum.ttf'),
  });
}

const MyText = styled.Text`
  font-size: 55px;
  color: ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.white};
  font-family: Sokcho;
`;

const AppView = styled.View`
  margin: 0;
  background-color: ${(props) => props.theme.colors.backgroundGray};
  height: 100%;
`;

export default function App() {
  loadFonts();
  return (
    <ThemeProvider theme={theme}>
      <AppView>
        <Header />
        <Shop />
      </AppView>
    </ThemeProvider>
  );
}
