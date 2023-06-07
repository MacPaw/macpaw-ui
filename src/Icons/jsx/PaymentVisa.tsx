import * as React from 'react';

function SvgPaymentVisa(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={70}
      height={54}
      viewBox="0 0 70 54"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          x1="0%"
          y1="20.245%"
          x2="99.646%"
          y2="79.545%"
          id="payment_visa_svg__a"
        >
          <stop stopColor="#453FAB" offset="0%" />
          <stop stopColor="#5165DA" offset="100%" />
        </linearGradient>
      </defs>
      <g transform="translate(-9 -17)" fill="none" fillRule="evenodd">
        <rect
          fill="url(#payment_visa_svg__a)"
          x={9}
          y={17}
          width={70}
          height={54}
          rx={8}
        />
        <path
          d="M43.687 42.156c-.023 1.81 1.604 2.821 2.829 3.422 1.258.617 1.681 1.012 1.676 1.563-.01.844-1.004 1.216-1.935 1.231-1.623.025-2.568-.441-3.318-.794l-.585 2.755c.753.35 2.147.654 3.594.667 3.394 0 5.615-1.686 5.627-4.301.013-3.318-4.56-3.502-4.53-4.985.011-.45.438-.93 1.372-1.052.463-.062 1.74-.109 3.187.562l.568-2.666A8.614 8.614 0 0049.147 38c-3.195 0-5.442 1.71-5.46 4.156m13.944-3.926c-.62 0-1.142.364-1.375.922l-4.85 11.652H54.8l.675-1.877h4.145l.391 1.877H63L60.391 38.23h-2.76m.474 3.397l.98 4.721h-2.682l1.702-4.721m-18.53-3.397L36.9 50.804h3.232l2.672-12.574h-3.23m-4.782 0l-3.365 8.558-1.36-7.277c-.16-.812-.79-1.281-1.491-1.281h-5.5l-.077.365c1.13.246 2.412.644 3.189 1.07.476.26.611.487.768 1.104l2.577 10.035h3.416l5.237-12.574h-3.394"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgPaymentVisa;
