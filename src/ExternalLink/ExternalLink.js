const ExternalLink = ({ children, ...other }) => (
  <a target="_blank" rel="noopener noreferrer" {...other}>
    {children}
  </a>
);

export default ExternalLink;
