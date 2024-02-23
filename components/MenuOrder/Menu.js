import styled from 'styled-components';
import ShopCard from '../@common/ShopCard';
import MenuDetail from './MenuDetail';
import MenuMoreButton from './MenuMoreButton';
import MenuTotalPrice from './MenuTotalPrice';
import MenuFooter from './MenuFooter';
import useMenuOrderStore from '../../stores/MenuOrderData';

const MenuWrapper = styled.View`
  margin-top: 10px;
  height: 100%;
`;

const Split = styled.View`
  margin-top: 10px;
`;

const Menu = () => {
  const { menuList } = useMenuOrderStore();
  return (
    <MenuWrapper>
      {menuList.map((menu) => (
        <MenuDetail key={menu.id} {...menu} />
      ))}
      <MenuMoreButton />
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
