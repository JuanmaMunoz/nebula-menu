import { TypeLink } from './enums';

export interface IOption {
  text: string;
  type: TypeLink;
  action: string;
}

export interface IMenuOptions {
  title: string;
  icon: string;
  options: IOption[];
}

export interface INavigationEnd {
  id: number;
  url: string;
  urlAfterRedirects: string;
  type: number;
}
