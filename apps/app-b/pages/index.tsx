import { Button } from "components/app-b";

export default function App() {
  return (
    <div>
      <h1>APP B</h1>
      <h2>{`Environment: ${process.env.NEXT_PUBLIC_ENVIRONMENT}`}</h2>
      <Button>{"Custom Button"}</Button>
    </div>
  );
}
