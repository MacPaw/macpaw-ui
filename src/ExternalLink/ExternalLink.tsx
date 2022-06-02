import React, { AnchorHTMLAttributes } from 'react';

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

const ExternalLink: React.FC<React.PropsWithChildren<ExternalLinkProps>> = (props) => {
  const { children, ...other } = props;

  return (
    <a target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  );
};

export default ExternalLink;
