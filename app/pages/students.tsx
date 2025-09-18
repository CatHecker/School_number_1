import type { Route } from "./+types/students";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ученикам" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Students() {
  return <h1>Hello world</h1>;
}