import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  backgroundColor?: string;
  style?: {};
}

const Button: React.FC<ButtonProps> = ({ children, style, ...rest }) => (
  <Container {...rest}>
    <ButtonText style={style}>{children}</ButtonText>
  </Container>
);

export default Button;
