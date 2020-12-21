import * as React from 'react';

function SvgRefresh(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.5 4.206A9 9 0 115.102 17.785l-.244-.305-.608-.794 1.587-1.217.608.794A7 7 0 106.5 7.669l2.537 1.465-5.964 2.33-.964-6.33 2.645 1.528A9.001 9.001 0 0116.5 4.206z" />
    </svg>
  );
}

export default SvgRefresh;
