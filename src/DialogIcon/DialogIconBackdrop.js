import React from 'react';

const DialogIconBackdrop = ({ className }) => (
  <svg className={className} width="280" height="107" viewBox="0 0 280 107" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="4.242%" y1="0%" x2="105.703%" y2="100%" id="modal-backdrop-a">
        <stop stopColor="#6DFFFD" stopOpacity=".426" offset="0%" />
        <stop stopColor="#FF54EA" stopOpacity=".544" offset="100%" />
      </linearGradient>
      <linearGradient x1="4.242%" y1="0%" x2="105.703%" y2="100%" id="modal-backdrop-b">
        <stop stopColor="#FF6D6D" offset="0%" />
        <stop stopColor="#FF54EA" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="99.863%" id="modal-backdrop-c">
        <stop stopColor="#D47800" offset="0%" />
        <stop stopColor="#DC00F7" offset="100%" />
      </linearGradient>
      <linearGradient x1="61.568%" y1="-27.344%" x2="50%" y2="97.815%" id="modal-backdrop-d">
        <stop stopColor="#00BDD4" offset="0%" />
        <stop stopColor="#009FDB" stopOpacity=".793" offset="21.575%" />
        <stop stopColor="#0032F7" stopOpacity=".017" offset="100%" />
      </linearGradient>
      <linearGradient x1="109.139%" y1="112.337%" x2="0%" y2="0%" id="modal-backdrop-e">
        <stop stopColor="#FFF2F8" offset="0%" />
        <stop stopColor="#F3F1FF" offset="64.991%" />
        <stop stopColor="#F1F8FF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#modal-backdrop-a)" opacity=".227" transform="rotate(45 43.97 16.97)" d="M31.971 4.971h24v24h-24z" />
      <path
        fill="url(#modal-backdrop-b)"
        opacity=".167"
        transform="rotate(45 207.071 99.071)"
        d="M202.071 94.071h10v10h-10z"
      />
      <circle fill="url(#modal-backdrop-c)" opacity=".097" cx="7" cy="74" r="7" />
      <rect fill="#C5CDF6" opacity=".225" x="53" y="92" width="8" height="8" rx="1.202" />
      <path
        d="M259 38c11.598 0 21 9.402 21 21.512C280 70.598 270.598 80 259 80s-21-9.402-21-20.488C238 47.402 247.402 38 259 38zm.481 8C251.821 46 246 51.82 246 59s5.82 13 13.481 13C266.18 72 272 66.18 272 59s-5.82-13-12.519-13z"
        fill="url(#modal-backdrop-d)"
        opacity=".116"
      />
      <circle fill="url(#modal-backdrop-e)" opacity=".87" cx="216.5" cy="16.5" r="9.5" />
    </g>
  </svg>
);

export default DialogIconBackdrop;
