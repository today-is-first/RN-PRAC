import styled from 'styled-components';
import ArrowIcon from '../assets/icons/ArrowIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const Header = ({ leftChild, title, rightChild }) => {
  const navigaion = useNavigation();

  return (
    <HeaderView>
      <HeaderWrapper>
        <TouchableOpacity onPress={() => navigaion.goBack()}>
          <ArrowIcon width="30px" height="30px" />
        </TouchableOpacity>
        <HeaderText>{title}</HeaderText>
        <TouchableOpacity>
          <HeaderButton>전체삭제</HeaderButton>
        </TouchableOpacity>
      </HeaderWrapper>
    </HeaderView>
  );
};

export default Header;
