import { greet } from "@example/greet";

export const Home: React.FC<{
  name: string;
  children?: React.ReactNode;
}> = (props) => (
  <div>
    <h1 data-testid="title">{greet(props.name)}</h1>
    {props.children}
  </div>
);
