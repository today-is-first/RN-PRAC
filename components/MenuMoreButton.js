import styled from 'styled-components';
import theme from '../theme';
import { TouchableOpacity } from 'react-native';
import AddIcon from '../assets/icons/AddIcon';

const MenuMoreView = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuMoreText = styled.Text`
  padding: 10px 4px;
  font-size: 14px;
  color: ${theme.colors.accent};
  font-weight: 900;
`;

const MenuMoreButton = () => {
  return (
    <MenuMoreView>
      <AddIcon width="18" height="18" fill={theme.colors.accent} />
      <MenuMoreText>더 담으러 가기</MenuMoreText>
    </MenuMoreView>
  );
};

export default MenuMoreButton;
