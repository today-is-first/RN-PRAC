import styled from 'styled-components';
import theme from '../theme';

const MenuDetail = () => {
  const MenuTitle = styled.Text`
    padding: 12px 24px 6px;
    font-size: 18px;
  `;

  const MenuSubTitle = styled.Text`
    padding: 0 24px 12px;
    color: ${theme.colors.textGray};
    font-size: 14px;
  `;
  return (
    <>
      <MenuTitle>오늘의 초밥10p + 리뷰서비스 2p</MenuTitle>
      <MenuSubTitle>- 기본: 10pcs (13,000원)</MenuSubTitle>
      <MenuSubTitle>
        - 초밥 추가 선택 : 타코와사비 1pcs추가 (1,400원) / 연어초밥 1pcs 추가
        (1,600원)
      </MenuSubTitle>
    </>
  );
};

export default MenuDetail;
