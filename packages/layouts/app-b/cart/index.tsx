import { CartPage as CommonCartPage } from "../../_common/cart";
import styles from "./styles.module.scss";

export function CartPage() {
  return <CommonCartPage className={styles.cartPage} />;
}
