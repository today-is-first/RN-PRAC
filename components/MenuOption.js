import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import theme from '../theme';

const MenuOption = () => {
  const MenuPriceAmountWrapper = styled.View`
    padding: 24px 24px 12px;
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
    width: 170px;
    height: 55px;
    border: 1px;
    border-radius: 25px;
    border-color: ${theme.colors.iconGray};
    padding: 6px 24px 12px;
  `;
  const MenuAmountDecrease = styled.Text`
    font-weight: 900;
  `;
  const MenuAmountIncrease = styled.Text`
    font-weight: 900;
  `;
  const MenuAmountText = styled.Text`
    font-size: 14px;
    font-weight: 600;
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

export default MenuOption;
