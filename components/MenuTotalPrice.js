import styled from 'styled-components';

const MenuPriceWrapper = styled.View`
  margin: 10px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TotalText = styled.Text`
  padding: 0 24px;
  font-size: 20px;
  font-weight: 900;
`;
const TotalPrice = styled.Text`
  padding: 0 24px;
  font-size: 20px;
  font-weight: 900;
`;

const MenuTotalPrice = () => {
  return (
    <MenuPriceWrapper>
      <TotalText>총 주문금액</TotalText>
      <TotalPrice>16,000원</TotalPrice>
    </MenuPriceWrapper>
  );
};

export default MenuTotalPrice;
