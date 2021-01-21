import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Password = (props) => {
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
  const showActionHandler = (event) => {
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
