import * as React from 'react';

function SvgDevice(props) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M17 2H7a5 5 0 00-5 5v6a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM7 4h10a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z" />
      <path d="M12.959 16H11.04a3.59 3.59 0 00-3.54 3 2.576 2.576 0 002.541 3h3.918a2.576 2.576 0 002.541-3 3.59 3.59 0 00-3.541-3zm-1.918 2h1.918c.777 0 1.44.562 1.568 1.329a.576.576 0 01-.568.671H10.04a.576.576 0 01-.568-.671A1.59 1.59 0 0111.04 18z" />
    </svg>
  );
}

export default SvgDevice;
