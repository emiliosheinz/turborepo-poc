import { CartPageProps } from "./types";
import { Button } from "components/_common";

export function CartPage(props: CartPageProps) {
  return (
    <div {...props}>
      <h1>Cart</h1>
      <Button>{"Botão de teste"}</Button>
    </div>
  );
}
