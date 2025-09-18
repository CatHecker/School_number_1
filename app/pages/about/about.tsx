import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О школе" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <h1>About web-application</h1>;
}
