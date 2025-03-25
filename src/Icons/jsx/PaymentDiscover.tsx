import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaymentDiscover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={70}
    height={54}
    viewBox="0 0 70 54"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient x1="34.941%" y1="20.245%" x2="112.799%" y2="88.823%" id="payment_discover_svg__b">
        <stop stopColor="#F2F5F7" offset="0%" />
        <stop stopColor="#CFD0DC" offset="100%" />
      </linearGradient>
      <linearGradient x1="34.941%" y1="20.245%" x2="112.799%" y2="88.823%" id="payment_discover_svg__c">
        <stop stopColor="#EBECEE" offset="0%" />
        <stop stopColor="#CFD0DC" offset="100%" />
      </linearGradient>
      <linearGradient x1="75.624%" y1="90.119%" x2="40.975%" y2="35.869%" id="payment_discover_svg__e">
        <stop stopColor="#F89F20" offset="0%" />
        <stop stopColor="#F79A20" offset="25.02%" />
        <stop stopColor="#F68D20" offset="53.31%" />
        <stop stopColor="#F58720" offset="61.96%" />
        <stop stopColor="#F48120" offset="72.32%" />
        <stop stopColor="#F37521" offset="100%" />
      </linearGradient>
      <linearGradient x1="70.147%" y1="89.379%" x2="19.507%" y2="-9.6%" id="payment_discover_svg__f">
        <stop stopColor="#F58720" offset="0%" />
        <stop stopColor="#E16F27" offset="35.87%" />
        <stop stopColor="#D4602C" offset="70.3%" />
        <stop stopColor="#D05B2E" offset="98.16%" />
      </linearGradient>
      <rect id="payment_discover_svg__a" x={0} y={0} width={70} height={54} rx={8} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="payment_discover_svg__d" fill="#fff">
        <use xlinkHref="#payment_discover_svg__a" />
      </mask>
      <use fill="url(#payment_discover_svg__b)" xlinkHref="#payment_discover_svg__a" />
      <use fill="url(#payment_discover_svg__c)" xlinkHref="#payment_discover_svg__a" />
      <g mask="url(#payment_discover_svg__d)">
        <g transform="translate(13 23)" fillRule="nonzero">
          <path
            d="M2.175.243H.064V7.64h2.111c1.113 0 1.932-.27 2.636-.858a3.722 3.722 0 001.343-2.84C6.142 1.766 4.517.243 2.175.243zm1.69 5.553c-.449.41-1.037.589-1.971.589H1.51V1.497h.384c.934 0 1.497.166 1.97.601.5.448.793 1.126.793 1.843 0 .704-.294 1.407-.793 1.855zM6.807.243h1.446v7.395H6.807zm4.964 2.841c-.87-.32-1.113-.538-1.113-.934 0-.461.448-.82 1.075-.82.435 0 .78.18 1.164.602l.755-.985a3.239 3.239 0 00-2.175-.82c-1.305 0-2.303.91-2.303 2.112 0 1.024.46 1.535 1.817 2.022.563.204.857.332.998.422.294.192.435.46.435.768 0 .601-.474 1.036-1.113 1.036-.691 0-1.241-.345-1.574-.985l-.934.895c.665.973 1.458 1.408 2.559 1.408 1.497 0 2.546-.998 2.546-2.431 0-1.164-.486-1.69-2.137-2.29zm2.585.856c0 2.176 1.702 3.852 3.902 3.852.614 0 1.152-.128 1.804-.435V5.655c-.575.576-1.087.806-1.74.806-1.446 0-2.482-1.049-2.482-2.546 0-1.42 1.062-2.533 2.418-2.533.691 0 1.203.243 1.804.832V.512c-.627-.32-1.151-.448-1.778-.448-2.175.013-3.928 1.727-3.928 3.877zm17.132 1.268L29.518.243h-1.574l3.148 7.587h.767L35.058.243h-1.561zm4.222 2.431h4.082V6.385h-2.648V4.389h2.546V3.135h-2.546V1.497h2.648V.243h-4.081zm9.789-5.208c0-1.382-.947-2.188-2.61-2.188h-2.137V7.64h1.446V4.67h.191l1.996 2.969h1.779l-2.329-3.11c1.062-.23 1.664-.972 1.664-2.098zm-2.892 1.216h-.422v-2.24h.448c.895 0 1.381.371 1.381 1.1 0 .743-.486 1.14-1.407 1.14z"
            fill="#231F20"
          />
          <circle fill="url(#payment_discover_svg__e)" cx={24.464} cy={3.966} r={3.928} />
          <circle fill="url(#payment_discover_svg__f)" opacity={0.65} cx={24.464} cy={3.966} r={3.928} />
          <g fill="#231F20">
            <path d="M46.42.525c0-.128-.09-.205-.243-.205h-.205v.652h.154V.717l.179.255h.192l-.218-.268c.09-.026.14-.09.14-.18zm-.269.09h-.025V.447h.025c.077 0 .115.025.115.09 0 .05-.038.076-.115.076z" />
            <path d="M46.202.077a.56.56 0 00-.563.563c0 .32.256.563.563.563a.568.568 0 00.563-.563.568.568 0 00-.563-.563zm0 1.036a.456.456 0 01-.448-.46c0-.256.205-.461.448-.461.243 0 .448.217.448.46a.457.457 0 01-.448.461z" />
          </g>
        </g>
      </g>
      <path
        d="M70 33c-12.667 8.188-32.667 15.188-60 21 12.137-.047 32.137-.047 60 0V33z"
        fill="#F38121"
        mask="url(#payment_discover_svg__d)"
      />
    </g>
  </svg>
);

export default SvgPaymentDiscover;
