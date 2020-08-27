import {FC, SVGAttributes} from 'react';

interface SVGComponent extends FC<SVGAttributes<SVGElement>> {}

export const Error: SVGComponent;
export const Play: SVGComponent;
export const Refreshing: SVGComponent;