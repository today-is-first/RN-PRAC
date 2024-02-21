import styled from 'styled-components';
import theme from '../theme';
const MenuFooterView = styled.View``;
const MenuFooterText = styled.Text`
  padding: 24px;
  color: ${theme.colors.textGray};
  font-size: 14px;
`;

const MenuFooter = () => {
  return (
    <MenuFooterView>
      <MenuFooterText>
        배달의민족은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서
        배달의 민족은 상품 거래 정보 및 거래에 대하여 책임을 지지 않습니다.
      </MenuFooterText>
    </MenuFooterView>
  );
};

export default MenuFooter;
