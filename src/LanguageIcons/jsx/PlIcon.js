import * as React from 'react';

function SvgPlIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 320 240" {...props}>
      <g fill="none">
        <rect width="320" height="120" fill="#FFF"/>
        <rect width="320" height="120" y="120" fill="#EB2248"/>
      </g>
    </svg>
  );
}

export default SvgPlIcon;
