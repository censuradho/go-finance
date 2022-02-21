import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export interface Props {
  position?: 'center' | 'top' | 'bottom'
}
export const Container = styled.View<Props>`
  flex: 1;
  padding: ${RFValue(24)}px;

  ${({ position = 'top' }) => position === 'center' && css`
    justify-content: center;
  `};

  ${({ position = 'top' }) => position === 'top' && css`
    justify-content: flex-start;
  `};

  ${({ position = 'top' }) => position === 'bottom' && css`
    justify-content: flex-end;
  `};
`

export const Loading = styled.ActivityIndicator`

`