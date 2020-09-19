import * as React from 'react';

function SvgPaymentCard(props) {
  return (
    <svg width={70} height={54} viewBox="0 0 70 54" {...props}>
      <defs>
        <linearGradient
          id="card-a"
          x1="0%"
          x2="99.646%"
          y1="20.245%"
          y2="79.545%"
        >
          <stop offset="0%" stopColor="#CAD4D6" />
          <stop offset="100%" stopColor="#B4BABF" />
        </linearGradient>
        <linearGradient
          id="card-b"
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
        <rect width={70} height={54} fill="url(#card-a)" rx={8} />
        <rect width={70} height={11} y={11} fill="url(#card-b)" />
        <rect
          width={16.528}
          height={6}
          x={44.722}
          y={28}
          fill="#FFF"
          opacity={0.546}
        />
      </g>
    </svg>
  );
}

export default SvgPaymentCard;
