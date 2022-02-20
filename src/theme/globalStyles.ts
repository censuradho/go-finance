import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface FlexProps {
  column?: boolean;
  flex?: number;
  maxWidth?: number | string;
  width?: number;
  justifyContent?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  fullWidth?: boolean;
}

export const Flex = styled.View<FlexProps>`
  display: flex;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex: ${props => props.flex || 'none'};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  margin-top: ${props =>
		props.marginTop ? `${props.marginTop || 0}px` : '0px'};
  margin-right: ${props =>
		props.marginRight ? `${props.marginRight || 0}px` : '0px'};
  margin-bottom: ${props =>
		props.marginBottom ? `${props.marginBottom || 0}px` : '0px'};
  margin-left: ${props =>
		props.marginLeft ? `${props.marginLeft || 0}px` : '0px'};
`

export const Hr = styled.View`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.foreground};
`