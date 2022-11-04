import type {NextPage} from "next";
import {greeting} from "@/greeting";

const HomePage: NextPage = () => {
  return <h1>{greeting}</h1>
}

export default HomePage;
