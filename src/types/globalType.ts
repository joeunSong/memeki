import { SerializedStyles } from '@emotion/react';
import React, { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface ContainerType {
  children: ReactNode;
}

export interface StyleType {
  style?: SerializedStyles;
}

export interface CustomContainerType extends ContainerType, StyleType {
  end?: boolean;
}

export interface StyleContainerType {
  children: ReactNode;
  style?: SerializedStyles;
  primary?: boolean;
  onClick?: () => void;
}

export interface SectionType extends ContainerType {
  gap?: string;
}

export interface SearchBarType {
  large?: boolean;
}

export interface SortButtonType {
  type: 'recent' | 'popular' | 'global' | 'year' | 'pendingDoc' | 'defaultDoc';
  isSelect?: boolean;
  onClick?: () => void;
}

export interface SelectBoxType {
  type: 'popular' | 'global' | 'year';
  publish?: string;
  setGlobalNameSpace?: any;
  setYearNameSpace?: any;
}

export interface SortButtonListType {
  main?: boolean;
  setGlobalNameSpace?: any;
  setYearNameSpace?: any;
  toggle?: any;
}

export interface ButtonBoxType extends ContainerType {
  type: 'default' | 'long' | 'verySmall' | 'square';
  submit?: boolean;
  onClick?: () => void;
  gray?: boolean;
}

export interface NavItemProps extends ContainerType {
  to: string;
  onClick?: () => void;
}

export interface LoginInputType {
  type: 'user' | 'password' | 'email';
  placeholder: string;
  check?: boolean;
  onClick?: () => void;
  register?: UseFormRegisterReturn;
  errMsg?: any;
}

export interface LineType {
  bold?: boolean;
}

export interface TextButtonType {
  type: 'id' | 'pw' | 'login' | 'signUp';
  noLine?: boolean;
}

export interface SignUpLevelType {
  first?: boolean;
}

export interface CheckBoxType extends ContainerType {
  textColumn?: boolean;
  onClick?: () => void;
  check?: boolean;
}

export interface FindInfoType {
  cnt?: number;
  text?: string;
}

export interface MoreButtonType {
  to: string;
  keyword?: string;
}

export interface InputBoxType {
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: boolean;
  onClickRemove?: any;
  order?: number;
  parentOrder?: number;
  parentUid?: string;
  append?: any;
  subTitle?: boolean;
}

export interface InfoContainerType extends ContainerType {
  yellowText: string;
  btnText: string;
  onClick?: () => void;
}

export interface FetcherProps {
  query: {
    isLoading: boolean;
    isError: boolean;
    error?: any;
    data?: any;
  };
  children: (data: any) => React.ReactNode;
}

export interface fieldType {
  id: number;
  order: number;
  title: string;
  content: string;
}
