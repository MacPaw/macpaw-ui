import * as React from 'react';

function LanguagePlaceholder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={16}
      viewBox="0 0 320 240"
      {...props}
    >
      <g fill="none">
        <path fill="transparent" d="M0 0h320v240H0z" />
      </g>
    </svg>
  );
}

export default LanguagePlaceholder;
