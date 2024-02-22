import styled, { ThemeProvider } from 'styled-components';
import { ScrollView } from 'react-native';
import theme from './theme';
import Header from './components/Header';
import Shop from './components/Shop';
import Menu from './components/Menu';
import MenuOrderButton from './components/MenuOrderButton';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    Pretendard: require('./assets/fonts/Pretendard-Regular.ttf'),
    Sokcho: require('./assets/fonts/SokchoBadaDotum.ttf'),
  });
}

const OrderView = styled.View`
  align-items: center;
  justify-content: center;
  height: 80px;
  border-top-width: 1px;
  border-top-color: ${theme.colors.splitGray};
`;

const AppView = styled.View`
  margin: 0;
  padding: 0 0 80px 0;
  background-color: transparent;
  border: 1px;
  border-color: red;
`;

const Scroll = styled(ScrollView)`
  background-color: ${(props) => props.theme.colors.backgroundGray};
`;

export default function App() {
  loadFonts();
  return (
    <ThemeProvider theme={theme}>
      <AppView>
        <Scroll>
          <Header />
          <Shop />
          <Menu />
        </Scroll>
        <OrderView>
          <MenuOrderButton />
        </OrderView>
      </AppView>
    </ThemeProvider>
  );
}
