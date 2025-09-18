import type { Route } from "./+types/contacts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contacts() {
  return <h1>Hello world</h1>;
}