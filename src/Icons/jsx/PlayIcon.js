import * as React from 'react';

function SvgPlayIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-1.583 4.028a1.5 1.5 0 01.744.198l4.325 2.472a1.5 1.5 0 010 2.604l-4.325 2.472a1.5 1.5 0 01-2.244-1.302V9.528a1.5 1.5 0 011.5-1.5zm.5 2.362v3.22L13.734 12l-2.817-1.61z" />
    </svg>
  );
}

export default SvgPlayIcon;
