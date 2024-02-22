import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import MenuOrderPage from './pages/MenuOrderPage';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    Pretendard: require('./assets/fonts/Pretendard-Regular.ttf'),
    Sokcho: require('./assets/fonts/SokchoBadaDotum.ttf'),
  });
}

const AppView = styled.View`
  margin: 0;
  padding: 0 0 80px 0;
  flex: 1;
`;

export default function App() {
  loadFonts();
  return (
    <ThemeProvider theme={theme}>
      <AppView>
        <MenuOrderPage />
      </AppView>
    </ThemeProvider>
  );
}
