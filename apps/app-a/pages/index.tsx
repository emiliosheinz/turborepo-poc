import { Button } from "components/app-a";

export default function App() {
  return (
    <div>
      <h1>APP A</h1>
      <h2>{`Environment: ${process.env.NEXT_PUBLIC_ENVIRONMENT}`}</h2>
      <Button>{"Default Button"}</Button>
    </div>
  );
}
