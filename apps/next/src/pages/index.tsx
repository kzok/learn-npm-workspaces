import type {NextPage} from "next";
import {greet} from "@example/greet";

const HomePage: NextPage = () => {
  return <h1>{greet("Next.js")}</h1>
}

export default HomePage;
