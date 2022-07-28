import { Button as CommonButton, ButtonProps } from "components/button";
import styles from "./styles.module.scss";

export function Button({ className, ...otherProps }: ButtonProps) {
  const classNames = [className, styles.button].filter(Boolean).join(" ");

  return <CommonButton className={classNames} {...otherProps} />;
}
