import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import RemoveIcon from '../../assets/icons/RemoveIcon';
import AddIcon from '../../assets/icons/AddIcon';
import useMenuOrderStore from '../../stores/MenuOrderData';

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

const MenuOption = ({ id, price, amount }) => {
  const { setAmount } = useMenuOrderStore();

  const handleIncreaseAmount = () => {
    setAmount({ price, amountChange: 1, id });
  };
  const handleDecreaseAmount = () => {
    if (amount <= 1) return;
    setAmount({ price, amountChange: -1, id });
  };

  return (
    <>
      <MenuPriceAmountWrapper>
        <MenuTotalPrice>
          {(price * amount).toLocaleString('kr-Kr')}원
        </MenuTotalPrice>
        <MenuAmountWrapper>
          <TouchableOpacity onPress={handleDecreaseAmount}>
            <RemoveIcon
              width="24"
              height="24"
              fill={amount > 1 ? 'black' : theme.colors.iconGray}
            />
          </TouchableOpacity>
          <MenuAmountText>{amount + '개'}</MenuAmountText>
          <TouchableOpacity onPress={handleIncreaseAmount}>
            <AddIcon width="24" height="24" />
          </TouchableOpacity>
        </MenuAmountWrapper>
      </MenuPriceAmountWrapper>
    </>
  );
};

export default MenuOption;
