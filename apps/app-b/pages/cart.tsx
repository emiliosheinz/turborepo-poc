import { CartPage } from "layouts/app-b";

export async function getStaticProps() {
  function delay(delay: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }

  await delay(30000);
  return {
    props: {},
  };
}

export default function Cart() {
  return <CartPage />;
}
