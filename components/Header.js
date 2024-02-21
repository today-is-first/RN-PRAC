import { View, Text, Button, Image } from 'react-native';
import styled from 'styled-components';

const HeaderView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 55px;
  font-family: 'Pretendard';
`;

const Header = () => {
  return (
    <HeaderView>
      <HeaderText>속초바다돋움</HeaderText>
    </HeaderView>
  );
};

export default Header;
