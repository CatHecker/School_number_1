import type { Route } from "./+types/parents";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Родителям" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Parents() {
  return <h1>Hello world</h1>;
}