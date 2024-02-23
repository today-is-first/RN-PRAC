import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ScrollView } from 'react-native';
import SelectMenu from '../components/SelelctMenu';
import styled from 'styled-components';
import MenuSelectData from '../stores/MenuSelectData';
import MenuOrderButton from '../components/MenuOrderButton';
import theme from '../theme';
import useMenuOrderStore from '../stores/MenuOrderData';

const SelectView = styled.View`
  margin: 0;
  padding: 50px 0 80px;
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

const MenuSelectPage = () => {
  const navigation = useNavigation();
  const { totalPrice } = useMenuOrderStore();
  return (
    <SelectView>
      <Scroll>
        {MenuSelectData.map((menu) => (
          <SelectMenu key={menu.id} {...menu} />
        ))}
      </Scroll>
      <OrderView>
        <MenuOrderButton
          totalPrice={totalPrice}
          onPress={() => navigation.navigate('MenuOrder')}
        />
      </OrderView>
    </SelectView>
  );
};

export default MenuSelectPage;
