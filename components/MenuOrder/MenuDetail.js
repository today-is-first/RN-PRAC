import styled from 'styled-components';
import theme from '../../theme';
import MenuOption from './MenuOption';
import ShopCard from '../@common/ShopCard';
import MenuDeleteButton from './MenuDeleteButton';

const MenuTopView = styled.View`
  padding: 12px 24px 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuTitle = styled.Text`
  font-size: 18px;
`;

const MenuSubTitle = styled.Text`
  padding: 0 24px 4px;
  color: ${theme.colors.textGray};
  font-size: 14px;
`;

const MenuDetail = ({ id, menu, option, price, amount }) => {
  return (
    <ShopCard key={id}>
      <MenuTopView>
        <MenuTitle>{menu}</MenuTitle>
        <MenuDeleteButton id={id} />
      </MenuTopView>
      {option.map((select, index) => (
        <MenuSubTitle key={index}>{select}</MenuSubTitle>
      ))}
      <MenuOption id={id} price={price} amount={amount} />
    </ShopCard>
  );
};

export default MenuDetail;
