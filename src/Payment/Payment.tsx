import React, { FC, HTMLAttributes } from 'react';
import Alipay from '../Icons/jsx/PaymentAlipay';
import Amex from '../Icons/jsx/PaymentAmex';
import ApplePay from '../Icons/jsx/PaymentApplePay';
import Bancontact from '../Icons/jsx/PaymentBancontact';
import Card from '../Icons/jsx/PaymentCard';
import DinersClub from '../Icons/jsx/PaymentDinersClub';
import Discover from '../Icons/jsx/PaymentDiscover';
import GooglePay from '../Icons/jsx/PaymentGooglePay';
import Ideal from '../Icons/jsx/PaymentIdeal';
import JCB from '../Icons/jsx/PaymentJcb';
import KakaoPay from '../Icons/jsx/PaymentKakaoPay';
import Mada from '../Icons/jsx/PaymentMada';
import Maestro from '../Icons/jsx/PaymentMaestro';
import Master from '../Icons/jsx/PaymentMaster';
import NaverPay from '../Icons/jsx/PaymentNaverPay';
import PaycoPay from '../Icons/jsx/PaymentPaycoPay';
import PayPal from '../Icons/jsx/PaymentPaypal';
import SamsungPay from '../Icons/jsx/PaymentSamsungPay';
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
  DinersClub: 'dinersclub',
  UnionPay: 'unionpay',
  Paypal: 'paypal',
  Alipay: 'alipay',
  ApplePay: 'applepay',
  GooglePay: 'googlepay',
  Ideal: 'ideal',
  Bancontact: 'bancontact',
  NaverPay: 'naverpay',
  KakaoPay: 'kakaopay',
  SamsungPay: 'samsungpay',
  Payco: 'payco',
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
  [CardType.Visa]: Visa,
  [CardType.Mada]: Mada,
  [CardType.Alipay]: Alipay,
  [CardType.ApplePay]: ApplePay,
  [CardType.GooglePay]: GooglePay,
  [CardType.Ideal]: Ideal,
  [CardType.Bancontact]: Bancontact,
  [CardType.NaverPay]: NaverPay,
  [CardType.KakaoPay]: KakaoPay,
  [CardType.SamsungPay]: SamsungPay,
  [CardType.Payco]: PaycoPay,
};

export interface PaymentProps extends HTMLAttributes<SVGElement> {
  type?: typeof CardType[keyof typeof CardType];
}

const normalizeType = (value: string): string => value.toLowerCase().replace(/[\s_-]/g, '');

const Payment: FC<React.PropsWithChildren<PaymentProps>> = ({ type, ...other }) => {
  const Component = type ? PaymentComponents[normalizeType(type)] : null;

  if (Component) return <Component {...other} />;

  return <Card {...other} />;
};

export default Payment;
