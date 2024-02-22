import styled from 'styled-components';
import theme from '../theme';
import { TouchableOpacity } from 'react-native';

const MenuMoreView = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const MenuMoreText = styled.Text`
  padding: 10px;
  font-size: 14px;
  color: ${theme.colors.accent};
  font-weight: 900;
`;

const MenuMoreButton = () => {
  return (
    <MenuMoreView>
      <MenuMoreText> + 더 담으러 가기</MenuMoreText>
    </MenuMoreView>
  );
};

export default MenuMoreButton;
