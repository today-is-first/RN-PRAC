import { View, Text, Button, Image } from 'react-native';
import styled from 'styled-components';
import ArrowIcon from '../assets/icons/ArrowIcon';
import { TouchableOpacity } from 'react-native';

const HeaderView = styled.View`
  justify-content: center;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 52px 24px 12px;
  border-bottom: 5px;
  background-color: ${(props) => props.theme.colors.white};
`;

const HeaderText = styled.Text`
  font-size: 18px;
  align-items: center;
  left: 50%;
  font-family: 'Pretendard';
  font-weight: 700;
`;

const HeaderButton = styled.Text`
  font-size: 18px;
`;

const Header = () => {
  return (
    <HeaderView>
      <HeaderWrapper>
        <TouchableOpacity>
          <ArrowIcon width="30px" height="30px" />
        </TouchableOpacity>
        <HeaderText>장바구니</HeaderText>
        <TouchableOpacity>
          <HeaderButton>전체삭제</HeaderButton>
        </TouchableOpacity>
      </HeaderWrapper>
    </HeaderView>
  );
};

export default Header;
