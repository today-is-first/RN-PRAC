import styled from 'styled-components';
import ShopCard from './ShopCard';
import MenuDetail from './MenuDetail';
import MenuOption from './MenuOption';
import MenuMoreButton from './MenuMoreButton';
import MenuTotalPrice from './MenuTotalPrice';
import MenuFooter from './MenuFooter';

const MenuWrapper = styled.View`
  margin-top: 10px;
`;

const Split = styled.View`
  margin-top: 10px;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <ShopCard>
        <MenuDetail />
        <MenuOption />
      </ShopCard>
      <ShopCard>
        <MenuMoreButton />
      </ShopCard>
      <Split>
        <ShopCard>
          <MenuTotalPrice />
        </ShopCard>
      </Split>
      <MenuFooter />
    </MenuWrapper>
  );
};

export default Menu;
