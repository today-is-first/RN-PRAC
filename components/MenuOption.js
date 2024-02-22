import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import theme from '../theme';
import RemoveIcon from '../assets/icons/RemoveIcon';
import AddIcon from '../assets/icons/AddIcon';

const MenuOption = () => {
  const MenuPriceAmountWrapper = styled.View`
    padding: 12px 24px;
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
    padding: 6px 24px;
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
            <RemoveIcon width="18" height="18" />
          </TouchableOpacity>
          <MenuAmountText>1개</MenuAmountText>
          <TouchableOpacity>
            <AddIcon width="18" height="18" />
          </TouchableOpacity>
        </MenuAmountWrapper>
      </MenuPriceAmountWrapper>
    </>
  );
};

export default MenuOption;
