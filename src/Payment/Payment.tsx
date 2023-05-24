import React, { FC, HTMLAttributes } from 'react';
import Amex from '../Icons/jsx/PaymentAmex';
import Card from '../Icons/jsx/PaymentCard';
import DinersClub from '../Icons/jsx/PaymentDinersClub';
import Discover from '../Icons/jsx/PaymentDiscover';
import JCB from '../Icons/jsx/PaymentJcb';
import Maestro from '../Icons/jsx/PaymentMaestro';
import Master from '../Icons/jsx/PaymentMaster';
import Mada from '../Icons/jsx/PaymentMada';
import PayPal from '../Icons/jsx/PaymentPaypal';
import UnionPay from '../Icons/jsx/PaymentUnionPay';
import Visa from '../Icons/jsx/PaymentVisa';

const CardType = {
  Master: 'master',
  Mastercard: 'mastercard',
  Visa: 'visa',
  Amex: 'amex',
  Discover: 'discover',
  JCB: 'jcb',
  Maestro: 'maestro',
  Mada: 'mada',
  DinersClub: 'diners_club',
  UnionPay: 'unionpay',
  Union_Pay: 'union_pay',
  Paypal: 'paypal',
};

export interface PaymentProps extends HTMLAttributes<SVGElement> {
  type?: typeof CardType[keyof typeof CardType];
}

const Payment: FC<React.PropsWithChildren<PaymentProps>> = (props) => {
  const { type, ...other } = props;

  switch (type) {
    case CardType.Paypal:
      return <PayPal {...other} />;
    case CardType.Amex:
      return <Amex {...other} />;
    case CardType.DinersClub:
      return <DinersClub {...other} />;
    case CardType.Discover:
      return <Discover {...other} />;
    case CardType.JCB:
      return <JCB {...other} />;
    case CardType.Maestro:
      return <Maestro {...other} />;
    case CardType.UnionPay:
    case CardType.Union_Pay:
      return <UnionPay {...other} />;
    case CardType.Visa:
      return <Visa {...other} />;
    case CardType.Master:
    case CardType.Mastercard:
      return <Master {...other} />;
    case CardType.Mada:
      return <Mada {...other} />;
    default:
      return <Card {...other} />;
  }
};

export default Payment;
