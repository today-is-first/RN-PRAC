import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import useMenuOrderStore from '../../stores/MenuOrderData';

const OrderButtonWrapper = styled(TouchableOpacity)`
  position: absolute;
  left: 0;
  right: 0;
  padding: 0px 16px 0px;
  background-color: transparent;
`;
const OrderText = styled.Text`
  border-radius: 5px;
  background-color: ${theme.colors.accent};
  font-size: 20px;
  text-align: center;
  padding: 12px 0px 16px;
  color: ${theme.colors.white};
  font-weight: 700;
`;

const MenuOrderButton = ({ onPress }) => {
  const { totalPrice } = useMenuOrderStore();
  return (
    <OrderButtonWrapper onPress={onPress}>
      <OrderText>
        {totalPrice.toLocaleString('kr-KR')}원 | 배달 주문하기
      </OrderText>
    </OrderButtonWrapper>
  );
};

export default MenuOrderButton;
