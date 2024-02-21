import styled, { View, Text } from 'styled-components';
import theme from '../theme';

const ShopContent = styled.View`
  margin: 12px 0;
  background-color: ${theme.colors.white};
`;

const ShopName = styled.Text`
  padding: 18px 24px;
  font-size: 24px;
  font-weight: 800;
  color: ${theme.colors.text};
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.splitGray};
`;

const ShopDeliveryWrapper = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.splitGray};
`;

const ShopDeliveryType = styled.Text`
  padding: 18px 24px 0;
`;
const ShopDeliveryMessage = styled.Text`
  padding: 4px 24px 18px;
`;

const Shop = () => {
  return (
    <ShopContent>
      <ShopName>나무인생초밥 강남점</ShopName>
      <ShopDeliveryWrapper>
        <ShopDeliveryType>배달</ShopDeliveryType>
        <ShopDeliveryMessage>문 앞까지 음식이 배달됩니다.</ShopDeliveryMessage>
      </ShopDeliveryWrapper>
    </ShopContent>
  );
};

export default Shop;
