import styled, { ThemeProvider } from 'styled-components';
import { ScrollView } from 'react-native';
import theme from '../theme';
import Header from '../components/Header';
import Shop from '../components/Shop';
import Menu from '../components/Menu';
import MenuOrderButton from '../components/MenuOrderButton';

const MenuOrderView = styled.View`
  margin: 0;
  padding: 0 0 80px 0;
`;

const Scroll = styled(ScrollView)`
  background-color: ${(props) => props.theme.colors.backgroundGray};
`;

const OrderView = styled.View`
  align-items: center;
  justify-content: center;
  height: 80px;
  border-top-width: 1px;
  border-top-color: ${theme.colors.splitGray};
`;

const MenuOrderPage = () => {
  return (
    <MenuOrderView>
      <Scroll>
        <Header />
        <Shop />
        <Menu />
      </Scroll>
      <OrderView>
        <MenuOrderButton />
      </OrderView>
    </MenuOrderView>
  );
};

export default MenuOrderPage;
