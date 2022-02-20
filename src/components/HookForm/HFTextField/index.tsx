import React, { ComponentProps, memo } from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextField } from 'src/components'

import * as Styles from '../styles'

type TextFieldProps = Omit<ComponentProps<typeof TextField>, 'onBlur' | 'onChangeText' | 'value'>

interface HFTextInputProps extends TextFieldProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, unknown>
	error?: string
}

function BaseHFTextInput ({ name, control, error, ...props }: HFTextInputProps) {
	return (
    
		<Styles.Container>
			<Controller
				control={control}
				render={({ field }) => (
					<TextField 
						onChangeText={field.onChange}
						onBlur={field.onBlur}
						value={field.value}
						{...props}
					/>

				)}
				name={name}
			/>
			{error && <Styles.ErrorMessage>{error}</Styles.ErrorMessage>}
		</Styles.Container>

	)
}

export const HFTextInput = memo(BaseHFTextInput)