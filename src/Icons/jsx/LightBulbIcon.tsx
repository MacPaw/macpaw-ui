import * as React from 'react';

function SvgLightBulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 3a7 7 0 013.851 12.846l-.87 4.35A1 1 0 0114 21h-4a1 1 0 01-.98-.804l-.871-4.35A7 7 0 0112 3zm1.618 13.812a7.022 7.022 0 01-3.236 0L10.82 19h2.36l.438-2.188zM12 5a5 5 0 100 10 5 5 0 000-10z" />
    </svg>
  );
}

export default SvgLightBulbIcon;
