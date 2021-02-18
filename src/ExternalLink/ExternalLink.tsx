import React, { AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
  const { children, ...other } = props;

  return (
    <a target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  );
};

export default ExternalLink;
