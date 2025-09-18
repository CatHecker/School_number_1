import type { Route } from "./+types/history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "История школы" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function History() {
  return <h1>Hello world</h1>;
}