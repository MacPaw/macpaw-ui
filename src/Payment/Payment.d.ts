import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<SVGElement> {
  type?: 'paypal' | 'american_express' | 'diners_club' | 'discover' | 'jcb' | 'maestro' | 'unionpay' | 'visa' | 'master';
}

declare const Payment: FC<Props>;

export default Payment;