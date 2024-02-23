import styled, { View, Text } from 'styled-components';
import theme from '../../theme';
import ShopCard from '../@common/ShopCard';

const ShopContent = styled.View`
  margin-top: 10px;
`;

const ShopName = styled.Text`
  padding: 10px 24px;
  font-size: 20px;
  font-weight: 900;
  color: ${theme.colors.text};
`;

const ShopDeliveryType = styled.Text`
  padding: 12px 24px 0;
  font-size: 16px;
`;
const ShopDeliveryMessage = styled.Text`
  padding: 0px 24px 12px;
  color: ${theme.colors.textGray};
  font-size: 14px;
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
