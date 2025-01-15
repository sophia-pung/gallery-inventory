import type { Route } from "./+types/home";
import MenuBar from "../components/MenuBar/MenuBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Gallery Manager - Photography West Gallery </h1>
      <MenuBar />
    </div>
  );
}
