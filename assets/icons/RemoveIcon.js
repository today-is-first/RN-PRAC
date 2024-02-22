import Svg, { Path } from 'react-native-svg';

const RemoveIcon = ({ width = '24', height = '24' }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M19 13H5V11H19V13Z" fill="black" />
  </Svg>
);

export default RemoveIcon;
