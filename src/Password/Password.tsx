import React, { FC, InputHTMLAttributes, ReactNode, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Error } from '../types';

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: 'medium' | 'small';
  label?: string | ReactNode;
  error?: Error;
  withToggle?: boolean;
  i18nToggle?: (isPasswordVisible: boolean) => string;
  onToggle?: () => void;
}

function i18nToggleDefault(isPasswordVisible: boolean) {
  return isPasswordVisible ? 'Hide' : 'Show';
}

const Password: FC<PasswordProps> = (props) => {
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
      action={withToggle && (
        <Button asLink onClick={toggleHandler}>
          {i18nToggle(passwordVisible)}
        </Button>
      )}
    />
  );
};

export default Password;
