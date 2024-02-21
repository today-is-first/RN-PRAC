import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import theme from '../theme';

const MenuResult = () => {
  const MenuPriceAmountWrapper = styled.View`
    padding: 24px 24px 6px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const MenuTotalPrice = styled.Text`
    font-size: 18px;
  `;

  const MenuAmountWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    border: 1px;
    border-radius: 25px;
    border-color: ${theme.colors.iconGray};
    padding: 12px 24px;
  `;
  const MenuAmountDecrease = styled.Text``;
  const MenuAmountIncrease = styled.Text``;
  const MenuAmountText = styled.Text`
    font-size: 16px;
  `;
  return (
    <>
      <MenuPriceAmountWrapper>
        <MenuTotalPrice>16,000원</MenuTotalPrice>
        <MenuAmountWrapper>
          <TouchableOpacity>
            <MenuAmountDecrease>-</MenuAmountDecrease>
          </TouchableOpacity>
          <MenuAmountText>1개</MenuAmountText>
          <TouchableOpacity>
            <MenuAmountIncrease>+</MenuAmountIncrease>
          </TouchableOpacity>
        </MenuAmountWrapper>
      </MenuPriceAmountWrapper>
    </>
  );
};

export default MenuResult;
