import type { Route } from "./+types/teachers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Учителям" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Teachers() {
  return <h1>Hello world</h1>;
}