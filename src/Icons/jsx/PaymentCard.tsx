import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaymentCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 54" {...props}>
    <rect width={70} height={54} rx="8.23529" fill="url(#paint0_linear_4423_5039)" />
    <rect x="7.89221" y="17.5503" width="11.6667" height="10.125" rx="1.37255" fill="url(#paint1_linear_4423_5039)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5589 19.5752H7.89221V21.6002H10.6372V23.6254H7.89221V25.6504H19.5589V23.6254H16.8137V21.6002H19.5589V19.5752ZM14.7549 23.6254V21.6002H12.696V23.6254H14.7549Z"
      fill="#CDA46E"
    />
    <path opacity="0.22" d="M36.7157 8.1001H7.89221V12.1501H36.7157V8.1001Z" fill="white" />
    <path
      opacity="0.22"
      d="M61.0897 43.2002H49.4005C49.0277 43.2002 48.7255 43.5024 48.7255 43.8752C48.7255 44.248 49.0277 44.5502 49.4005 44.5502H61.0897C61.4625 44.5502 61.7647 44.248 61.7647 43.8752C61.7647 43.5024 61.4625 43.2002 61.0897 43.2002Z"
      fill="white"
    />
    <path
      d="M60.3921 33.0752H50.098C49.34 33.0752 48.7255 33.6897 48.7255 34.4477V39.8026C48.7255 40.5607 49.34 41.1752 50.098 41.1752H60.3921C61.1502 41.1752 61.7647 40.5607 61.7647 39.8026V34.4477C61.7647 33.6897 61.1502 33.0752 60.3921 33.0752Z"
      fill="url(#paint2_linear_4423_5039)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4423_5039"
        x1="-2.6992"
        y1="10.9323"
        x2="70.9058"
        y2="63.3886"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#606060" />
        <stop offset="1" stopColor="#353141" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4423_5039"
        x1="13.7255"
        y1="17.5503"
        x2="13.7255"
        y2="27.6753"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEAAB" />
        <stop offset="1" stopColor="#FFD072" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4423_5039"
        x1="48.7255"
        y1="41.1752"
        x2="61.6406"
        y2="32.882"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE57CD" />
        <stop offset="1" stopColor="#E97787" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgPaymentCard;
