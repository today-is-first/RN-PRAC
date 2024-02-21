import styled, { View, Text } from 'styled-components';
import theme from '../theme';
const ShopContent = styled.View`
  margin-top: 12px;
  padding: 18px 24px;
  background-color: ${theme.colors.white};
`;

const ShopName = styled.Text`
  font-size: 24px;
  font-weight: 800;
`;

const Shop = () => {
  return (
    <ShopContent>
      <ShopName>나무인생초밥 강남점</ShopName>
    </ShopContent>
  );
};

export default Shop;
