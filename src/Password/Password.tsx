import React, { FC, InputHTMLAttributes, ReactNode, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Error, InputValueType } from '../types';

export interface PasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  scale?: 'medium' | 'small';
  label?: string | ReactNode;
  error?: Error;
  withToggle?: boolean;
  i18nToggle?: (isPasswordVisible: boolean) => string;
  onToggle?: () => void;
  onChange?: (value: InputValueType, event?: React.ChangeEvent<HTMLInputElement>) => void;
}

const i18nToggleDefault = (isPasswordVisible: boolean) => (isPasswordVisible ? 'Hide' : 'Show');

const Password: FC<React.PropsWithChildren<PasswordProps>> = (props) => {
  const { withToggle, i18nToggle = i18nToggleDefault, onToggle, ...other } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
    if (onToggle) onToggle();
  };

  return (
    <Input
      {...other}
      type={passwordVisible ? 'text' : 'password'}
      action={
        withToggle && (
          <Button asLink onClick={toggleHandler}>
            {i18nToggle(passwordVisible)}
          </Button>
        )
      }
    />
  );
};

export default Password;
