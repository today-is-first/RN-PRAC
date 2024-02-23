import styled from 'styled-components';
import theme from '../theme';
import MenuOption from './MenuOption';
import ShopCard from './ShopCard';

const MenuDetail = ({ id, menu, option, price, amount }) => {
  const MenuTitle = styled.Text`
    padding: 12px 24px 6px;
    font-size: 18px;
  `;

  const MenuSubTitle = styled.Text`
    padding: 0 24px 4px;
    color: ${theme.colors.textGray};
    font-size: 14px;
  `;
  return (
    <ShopCard key={id}>
      <MenuTitle>{menu}</MenuTitle>
      {option.map((select, index) => (
        <MenuSubTitle key={index}>{select}</MenuSubTitle>
      ))}
      <MenuOption id={id} price={price} amount={amount} />
    </ShopCard>
  );
};

export default MenuDetail;
