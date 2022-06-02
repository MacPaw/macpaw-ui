import React, { FC, HTMLAttributes } from 'react';
import AmericanExpress from '../Icons/jsx/PaymentAmex';
import Card from '../Icons/jsx/PaymentCard';
import DinersClub from '../Icons/jsx/PaymentDinersClub';
import Discover from '../Icons/jsx/PaymentDiscover';
import JCB from '../Icons/jsx/PaymentJcb';
import Maestro from '../Icons/jsx/PaymentMaestro';
import Master from '../Icons/jsx/PaymentMaster';
import PayPal from '../Icons/jsx/PaymentPaypal';
import UnionPay from '../Icons/jsx/PaymentUnionPay';
import Visa from '../Icons/jsx/PaymentVisa';

export interface PaymentProps extends HTMLAttributes<SVGElement> {
  type?: 'paypal' | 'american_express' | 'diners_club' | 'discover' | 'jcb' | 'maestro' | 'unionpay' | 'visa' | 'master';
}

const Payment: FC<React.PropsWithChildren<PaymentProps>> = (props) => {
  const { type, ...other } = props;

  switch (type) {
    case 'paypal':
      return <PayPal {...other} />;
    case 'american_express':
      return <AmericanExpress {...other} />;
    case 'diners_club':
      return <DinersClub {...other} />;
    case 'discover':
      return <Discover {...other} />;
    case 'jcb':
      return <JCB {...other} />;
    case 'maestro':
      return <Maestro {...other} />;
    case 'unionpay':
      return <UnionPay {...other} />;
    case 'visa':
      return <Visa {...other} />;
    case 'master':
      return <Master {...other} />;
    default:
      return <Card {...other} />;
  }
};

export default Payment;
