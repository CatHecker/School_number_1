import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("pages/home/home.tsx"),
    route("about", "./pages/about/about.tsx"),
    route("history", "./pages/history.tsx"),
    route("parents", "./pages/parents.tsx"),
    route("students", "./pages/students.tsx"),
    route("teachers", "./pages/teachers.tsx"),
    route("nutrition", "./pages/nutrition.tsx"),
    route("contacts", "./pages/contacts.tsx"),
  ]),
] satisfies RouteConfig;
