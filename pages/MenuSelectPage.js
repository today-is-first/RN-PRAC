import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import SelectMenu from '../components/SelelctMenu';
import styled from 'styled-components';
import MenuSelectData from '../stores/MenuSelectData';

const SelectView = styled.View`
  padding: 50px 0 0;
`;
const SelectText = styled.Text`
  text-align: center;
`;

const MenuSelectPage = () => {
  const navigation = useNavigation();
  return (
    <SelectView>
      {MenuSelectData.map((menu) => (
        <SelectMenu key={menu.id} {...menu} />
      ))}
      <TouchableOpacity onPress={() => navigation.navigate('MenuOrder')}>
        <SelectText>sdsdsdsdss</SelectText>
      </TouchableOpacity>
    </SelectView>
  );
};

export default MenuSelectPage;
