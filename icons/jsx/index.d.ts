import {FC, SVGAttributes} from 'react';

interface SVGComponent extends FC<SVGAttributes<SVGElement>> {}

declare module 'macpaw-ui/icons/jsx';

export const Error: SVGComponent;
export const Play: SVGComponent;
export const Refreshing: SVGComponent;