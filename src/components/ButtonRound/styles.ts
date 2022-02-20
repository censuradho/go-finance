import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

import styled from 'styled-components/native'

export interface ButtonProps {
  size: number
}

export const Button = styled(BorderlessButton).attrs(props => ({ ...props }))<ButtonProps>`
  width: ${({ size = 40}) => `${RFValue(size)}px`};
  height: ${({ size = 40}) => `${RFValue(size)}px`};
  z-index: 20;
  align-items: center;  
  justify-content: center;
`
