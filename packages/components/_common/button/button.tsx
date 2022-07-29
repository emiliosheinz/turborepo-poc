import { ButtonProps } from "./types";

export const Button = ({ children, ...otherProps }: ButtonProps) => {
  return <button {...otherProps}>{children}</button>;
};
