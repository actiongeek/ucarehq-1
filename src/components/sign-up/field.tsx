import React from 'react';

import FieldError from './field-error';

interface FieldProps {
	value: string;
	error: string | undefined;
	name: string;
	placeholder: string;
	type?: 'text' | 'email' | 'tel';
	maxLength?: number;
	onChange: (name: string, value: string) => void;
	disabled: boolean;
}
const Field: React.FC<FieldProps> = ({
	children,
	value,
	name,
	error,
	placeholder,
	type = 'text',
	maxLength = 255,
	onChange,
	disabled,
}) => {
	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange(e.currentTarget.name, e.currentTarget.value);
		},
		[onChange]
	);
	return (
		<label>
			{children}
			<input
				value={value}
				type={type}
				className={error ? 'form-control error' : 'form-control'}
				placeholder={placeholder}
				name={name}
				maxLength={maxLength}
				onChange={handleChange}
				disabled={disabled}
			/>
			<FieldError>{error}</FieldError>
		</label>
	);
};
export default Field;
