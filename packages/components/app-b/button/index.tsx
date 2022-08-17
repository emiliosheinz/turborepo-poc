import { Button as CommonButton, ButtonProps } from "../../_common/button";

import styles from "./styles.module.scss";

export function Button({ className, ...otherProps }: ButtonProps) {
  return (
    <CommonButton {...otherProps} className={`${styles.button} ${className}`} />
  );
}
