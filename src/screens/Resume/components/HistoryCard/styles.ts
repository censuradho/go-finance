import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export interface Props {
  color: string
}
export const Container = styled.View<Props>`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${RFValue(48)}px;
  align-items: center;

  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  padding: 0 ${RFValue(20)}px;

  border-top-color: ${({ theme }) => theme.colors.foreground};
  border-right-color: ${({ theme }) => theme.colors.foreground};
  border-bottom-color: ${({ theme }) => theme.colors.foreground};

  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;

  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  margin-bottom: 8px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`

export const Amount = styled(Title)`
  color: ${({ theme }) => theme.colors.title};

`