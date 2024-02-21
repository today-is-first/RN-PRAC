import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './components/Header';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    Pretendard: require('./assets/fonts/PretendardVariable.ttf'),
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
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  loadFonts();
  return (
    <ThemeProvider theme={theme}>
      <AppView>
        <MyText>장바구니</MyText>
        <Header />
      </AppView>
    </ThemeProvider>
  );
}
