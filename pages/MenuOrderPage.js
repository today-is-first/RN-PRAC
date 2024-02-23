import styled from 'styled-components';
import { ScrollView } from 'react-native';
import theme from '../theme';
import Header from '../components/@common/Header';
import Menu from '../components/MenuOrder/Menu';
import MenuOrderButton from '../components/@common/MenuOrderButton';
import Shop from '../components/MenuOrder/Shop';

const MenuOrderView = styled.View`
  margin: 0;
  padding-bottom: 80px;
  background-color: ${theme.colors.white};
`;

const Scroll = styled(ScrollView)`
  background-color: ${(props) => props.theme.colors.backgroundGray};
  height: 100%;
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
        <Header title={'장바구니'} />
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
