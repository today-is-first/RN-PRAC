import styled from 'styled-components';

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
  return (
    <MenuPriceWrapper>
      <TotalText>총 주문금액</TotalText>
      <TotalText>16,000원</TotalText>
    </MenuPriceWrapper>
  );
};

export default MenuTotalPrice;
