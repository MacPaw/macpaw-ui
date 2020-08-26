import {FC, SVGAttributes} from 'react';

declare module 'macpaw-ui';

export { default as Badge } from './Badge/Badge';
export { default as Banner } from './Banner/Banner';
export { default as Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
export { default as Button } from './Button/Button';
export { default as Checkbox } from './Checkbox/Checkbox';
export { default as FormRow } from './FormRow/FormRow';
export { default as Hint } from './Hint/Hint';
export { default as Input } from './Input/Input';
export { default as Loader } from './Loader/Loader';
export { default as Modal } from './Modal/Modal';
export { default as Panel } from './Panel/Panel';
export { default as Select } from './Select/Select';

interface SVGComponent extends FC<SVGAttributes<SVGElement>> {}

export const Error: SVGComponent;
export const Play: SVGComponent;
export const Refreshing: SVGComponent;
