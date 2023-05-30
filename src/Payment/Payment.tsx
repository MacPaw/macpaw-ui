import React, { FC, HTMLAttributes } from 'react';
import Amex from '../Icons/jsx/PaymentAmex';
import Card from '../Icons/jsx/PaymentCard';
import DinersClub from '../Icons/jsx/PaymentDinersClub';
import Discover from '../Icons/jsx/PaymentDiscover';
import JCB from '../Icons/jsx/PaymentJcb';
import Mada from '../Icons/jsx/PaymentMada';
import Maestro from '../Icons/jsx/PaymentMaestro';
import Master from '../Icons/jsx/PaymentMaster';
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
  // eslint-disable-next-line camelcase
  Union_Pay: 'union_pay',
  Paypal: 'paypal',
};

const PaymentComponents = {
  [CardType.Master]: Master,
  [CardType.Mastercard]: Master,
  [CardType.Paypal]: PayPal,
  [CardType.Amex]: Amex,
  [CardType.DinersClub]: DinersClub,
  [CardType.Discover]: Discover,
  [CardType.JCB]: JCB,
  [CardType.Maestro]: Maestro,
  [CardType.UnionPay]: UnionPay,
  [CardType.Union_Pay]: UnionPay,
  [CardType.Visa]: Visa,
  [CardType.Mada]: Mada,
};

export interface PaymentProps extends HTMLAttributes<SVGElement> {
  type?: typeof CardType[keyof typeof CardType];
}

const Payment: FC<React.PropsWithChildren<PaymentProps>> = ({ type, ...other }) => {
  const Component = type ? PaymentComponents[type] : null;

  if (Component) return <Component {...other} />;

  return <Card {...other} />;
};

export default Payment;
