import {FC, HTMLProps} from 'react';

interface Props extends HTMLProps<HTMLLinkElement> {}

declare const ExternalLink: FC<Props>;

export default ExternalLink;