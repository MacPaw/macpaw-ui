import * as React from 'react';

function SvgDownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.014 3c.507 0 .923.387.98.884L13 4l-.021 11.687 4.31-4.333c.357-.36.924-.391 1.319-.091l.095.082a.988.988 0 01.091 1.31l-.082.094-5.981 6.014c-.11.111-.24.19-.379.24L18 19a1 1 0 110 2H6a1 1 0 110-2l5.687.002a.996.996 0 01-.282-.153l-.095-.084-6.02-6.014a.988.988 0 01.005-1.404 1.006 1.006 0 011.32-.078l.094.082 4.295 4.291.021-11.645a.995.995 0 01.874-.99L12.015 3z" />
    </svg>
  );
}

export default SvgDownloadIcon;
