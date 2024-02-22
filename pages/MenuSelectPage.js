import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const SelectView = styled.View`
  align-items: center;
  justify-content: center;
  top: 50%;
`;
const SelectText = styled.Text`
  text-align: center;
`;

const MenuSelectPage = () => {
  const navigation = useNavigation();
  return (
    <SelectView>
      <TouchableOpacity onPress={() => navigation.navigate('MenuOrder')}>
        <SelectText>장바구니</SelectText>
      </TouchableOpacity>
    </SelectView>
  );
};

export default MenuSelectPage;
