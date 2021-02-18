import * as React from 'react';

function SvgDropdownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M18.94 7.94a1.5 1.5 0 012.224 2.007l-.103.114-8 8a1.5 1.5 0 01-2.008.103l-.114-.103-8-8a1.5 1.5 0 012.008-2.225l.114.103L12 14.88l6.94-6.94z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgDropdownIcon;
