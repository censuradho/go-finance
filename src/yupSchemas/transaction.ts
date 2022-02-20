import * as yup from 'yup'

import { positiveNum, requireField, typeError } from './messages'

export const createTransactionSchemaValidation = yup.object({
	name: yup
		.string()
		.required(requireField),
	amount: yup
		.number()
		.typeError(typeError)
		.required(requireField)
		.positive(positiveNum)
})