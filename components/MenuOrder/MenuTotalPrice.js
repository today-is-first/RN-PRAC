import styled from 'styled-components';
import useMenuOrderStore from '../../stores/MenuOrderData';

const MenuPriceWrapper = styled.View`
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TotalText = styled.Text`
  padding: 4px 24px;
  font-size: 16px;
  font-weight: 700;
`;

const MenuTotalPrice = () => {
  const { totalPrice } = useMenuOrderStore();
  return (
    <MenuPriceWrapper>
      <TotalText>총 주문금액</TotalText>
      <TotalText>{totalPrice.toLocaleString('kr-Kr')}원</TotalText>
    </MenuPriceWrapper>
  );
};

export default MenuTotalPrice;
