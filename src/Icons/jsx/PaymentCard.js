import * as React from 'react';

function SvgPaymentCard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={54}
      viewBox="0 0 70 54"
      {...props}
    >
      <defs>
        <linearGradient
          id="payment_card_svg__a"
          x1="0%"
          x2="99.646%"
          y1="20.245%"
          y2="79.545%"
        >
          <stop offset="0%" stopColor="#CAD4D6" />
          <stop offset="100%" stopColor="#B4BABF" />
        </linearGradient>
        <linearGradient
          id="payment_card_svg__b"
          x1="28.561%"
          x2="99.536%"
          y1="47.217%"
          y2="51.219%"
        >
          <stop offset="0%" stopColor="#656565" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect width={70} height={54} fill="url(#payment_card_svg__a)" rx={8} />
        <path fill="url(#payment_card_svg__b)" d="M0 11h70v11H0z" />
        <path fill="#FFF" opacity={0.546} d="M44.722 28H61.25v6H44.722z" />
      </g>
    </svg>
  );
}

export default SvgPaymentCard;
