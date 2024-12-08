export enum Variant {
  Default = "default",
  Filled = "filled",
  Unstyled = "unstyled",
}
export enum Radius {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum Size {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export const SIZE_NUMBER = {
  [Size.xs]: 10,
  [Size.sm]: 25,
  [Size.md]: 50,
  [Size.lg]: 75,
  [Size.xl]: 100,
};

export const RADIUS_NUMBER = {
  [Size.xs]: 0,
  [Size.sm]: 25,
  [Size.md]: 50,
  [Size.lg]: 75,
  [Size.xl]: 100,
};

export type SigninForm = {
  login: string;
  password: string;
} 

export type SignupForm = {
  name: string;
  nickName: string;
  email: string;
  gender: Gender | null;
  password: string;
  passwordRepeat: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female'
}