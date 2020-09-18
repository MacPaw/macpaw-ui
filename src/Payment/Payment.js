import React from 'react';
import AmericanExpress from '../Icons/jsx/PaymentAmex';
import Card from '../Icons/jsx/PaymentCard';
import DinersClub from '../Icons/jsx/PaymentDinersClub';
import Discover from '../Icons/jsx/PaymentDiscover';
import JCB from '../Icons/jsx/PaymentJcb';
import Maestro from '../Icons/jsx/PaymentMaestro';
import Master from '../Icons/jsx/PaymentMaster';
import PayPal from '../Icons/jsx/PaymentPaypal';
import UnionPay from '../Icons/jsx/PaymentUnionpay';
import Visa from '../Icons/jsx/PaymentVisa';

const Payment = (props) => {
  const { type } = props;

  switch (type) {
    case 'paypal':
      return <PayPal />;
    case 'american_express':
      return <AmericanExpress />;
    case 'diners_club':
      return <DinersClub />;
    case 'discover':
      return <Discover />;
    case 'jcb':
      return <JCB />;
    case 'maestro':
      return <Maestro />;
    case 'unionpay':
      return <UnionPay />;
    case 'visa':
      return <Visa />;
    case 'master':
      return <Master />;
    default:
      return <Card />;
  }
};

export default Payment;
