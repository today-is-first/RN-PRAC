import ShopCard from './ShopCard';
import styled from 'styled-components';

const MenuWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
`;
const TextWrapper = styled.View`
  padding: 6px 0;
`;
const MenuTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
  padding-bottom: 6px;
`;
const MenuPrice = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

const ImageView = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
`;
const MenuImage = styled.Image`
  width: 105%;
  height: 105%;
`;

const SelectMenu = ({ title, price, img }) => {
  return (
    <ShopCard>
      <MenuWrapper>
        <TextWrapper>
          <MenuTitle>{title}</MenuTitle>
          <MenuPrice>{price}</MenuPrice>
        </TextWrapper>
        <ImageView>
          <MenuImage source={img} resizeMode="cover" />
        </ImageView>
      </MenuWrapper>
    </ShopCard>
  );
};

export default SelectMenu;
