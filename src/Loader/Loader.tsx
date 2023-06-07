import React, { FC, HTMLAttributes } from 'react';
import cx from 'clsx';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  inline?: boolean;
}
const DEFAULT_LOADER_SIZE = 75;

const Loader: FC<React.PropsWithChildren<LoaderProps>> = (props) => {
  const { size = DEFAULT_LOADER_SIZE, inline = false, className, ...other } = props;

  return (
    <div className={cx('loader', inline && '-inline', className)} {...other}>
      <svg width={size} height={size} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle stroke="#EBEBEB" strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
