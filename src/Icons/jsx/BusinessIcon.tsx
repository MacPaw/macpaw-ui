import * as React from 'react';

function SvgBusinessIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="m13 3c1.6569 0 3 1.34315 3 3v1h2c1.6569 0 3 1.34315 3 3v8c0 1.6569-1.3431 3-3 3h-12c-1.65685 0-3-1.3431-3-3v-8c0-1.65685 1.34315-3 3-3h2v-1c0-1.65685 1.34315-3 3-3zm-3 6h-2-2c-.55228 0-1 .44772-1 1v1h14v-1c0-.55228-.4477-1-1-1h-2-2zm4-2h-4v-1c0-.55228.4477-1 1-1h2c.5523 0 1 .44772 1 1zm5 6h-6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h-6v5c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgBusinessIcon;
