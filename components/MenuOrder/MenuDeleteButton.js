import ClearIcon from '../../assets/icons/ClearIcon';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import theme from '../../theme';
import React from 'react';
import useMenuOrderStore from '../../stores/MenuOrderData';

const MenuDeleteView = styled(TouchableOpacity)``;

const MenuDeleteButton = ({ id }) => {
  const deleteMenu = useMenuOrderStore((state) => state.deleteMenu);
  return (
    <MenuDeleteView onPress={() => deleteMenu(id)}>
      <ClearIcon width="20px" height="20px" fill={theme.colors.textGray} />
    </MenuDeleteView>
  );
};

export default React.memo(MenuDeleteButton);
