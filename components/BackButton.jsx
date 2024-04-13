import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack(); // Navigate to previous screen
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Svg
        width={30}
        height={30}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black" // Set stroke color to black
        fill="white"   // Set fill color to white
      >
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default BackButton;
