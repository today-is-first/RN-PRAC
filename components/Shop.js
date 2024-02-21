import styled, { View, Text } from 'styled-components';
import theme from '../theme';
import ShopCard from './ShopCard';

const ShopContent = styled.View`
  margin-top: 10px;
`;

const ShopName = styled.Text`
  padding: 6px 24px;
  font-size: 24px;
  font-weight: 800;
  color: ${theme.colors.text};
`;

const ShopDeliveryType = styled.Text`
  padding: 18px 24px 0;
  font-size: 18px;
`;
const ShopDeliveryMessage = styled.Text`
  padding: 4px 24px 18px;
  color: ${theme.colors.textGray};
  font-size: 16px;
`;

const Shop = () => {
  return (
    <ShopContent>
      <ShopCard>
        <ShopName>나무인생초밥 강남점</ShopName>
      </ShopCard>
      <ShopCard>
        <ShopDeliveryType>배달</ShopDeliveryType>
        <ShopDeliveryMessage>문 앞까지 음식이 배달됩니다.</ShopDeliveryMessage>
      </ShopCard>
    </ShopContent>
  );
};

export default Shop;
