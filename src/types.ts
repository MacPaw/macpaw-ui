import { ReactNode } from 'react';

export type Error = boolean | string | ReactNode;

export type InputValueType = string | number | readonly string[];

export type Maybe<T> = null | undefined | T;
