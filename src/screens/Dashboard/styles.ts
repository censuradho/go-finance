import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`


export const HightLightCard = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 24
	},
	horizontal: true,
	showsHorizontalScrollIndicator: false
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
  z-index: 9;
`