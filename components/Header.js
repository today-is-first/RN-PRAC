import { View, Text, Button, Image } from 'react-native';
import styled from 'styled-components';
import ArrowIcon from '../assets/icons/ArrowIcon';

const HeaderView = styled.View``;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 52px 24px 18px;
  border-bottom: 5px;
  background-color: ${(props) => props.theme.colors.white};
`;

const HeaderText = styled.Text`
  font-size: 20px;
  align-items: center;
  left: 50%;
  font-family: 'Pretendard';
  font-weight: 700;
`;

const HeaderButton = styled.Button`
  background-color: 'none';
  color: #000;
`;

const Header = () => {
  return (
    <HeaderView>
      <HeaderWrapper>
        <ArrowIcon width="30px" height="30px" />
        <HeaderText>장바구니</HeaderText>
        <HeaderButton title="전체삭제" />
      </HeaderWrapper>
    </HeaderView>
  );
};

export default Header;
