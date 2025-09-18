import type { Route } from "./+types/nutrition";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Питание" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Nutrition() {
  return <h1>Hello world</h1>;
}