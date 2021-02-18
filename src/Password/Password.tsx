import React, { FC, InputHTMLAttributes, ReactNode, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Error } from '../types';

interface PasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  onShowHide?: boolean | (() => void);
  onForgot?: () => void;
  scale?: 'medium' | 'small';
  label?: string | ReactNode;
  error?: Error;
  i18nShow?: string;
  i18nHide?: string;
  i18nForgot?: string;
}

const Password: FC<PasswordProps> = (props) => {
  const {
    onShowHide,
    onForgot,
    i18nShow = 'Show',
    i18nHide = 'Hide',
    i18nForgot = 'Forgot',
    ...other
  } = props;
  const withAction = onShowHide || onForgot;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const showActionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
    if (typeof onShowHide === 'function') onShowHide();
  };

  const Action = () => {
    if (onShowHide) {
      return (
        <Button asLink onClick={showActionHandler}>
          {passwordVisible ? i18nHide : i18nShow}
        </Button>
      );
    }

    if (onForgot) {
      return (
        <Button asLink onClick={onForgot}>
          {i18nForgot}
        </Button>
      );
    }

    return null;
  };

  return (
    <Input
      {...other}
      type={passwordVisible ? 'text' : 'password'}
      action={withAction ? <Action /> : undefined}
    />
  );
};

export default Password;
