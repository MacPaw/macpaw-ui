import * as React from 'react';

function SvgAccount(props) {
  return (
    <svg height={24} width={24} {...props}>
      <path
        d="M12 2l.28.004C17.673 2.152 22 6.57 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 12a5.001 5.001 0 00-4.95 4.285A7.965 7.965 0 0012 20l.25-.004a7.963 7.963 0 004.698-1.71A4.998 4.998 0 0012 14zm0-10l-.25.004A8 8 0 005.434 16.57a7.025 7.025 0 013.585-3.905 4 4 0 115.964.001 7.018 7.018 0 013.584 3.903A8 8 0 0012 4zm0 4a2 2 0 100 4 2 2 0 000-4z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAccount;
