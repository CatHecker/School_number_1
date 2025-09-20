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
    route("history", "./pages/history/history.tsx"),
    route("education", "./pages/education/education.tsx"),
    route("teachers", "./pages/teachers/teachers.tsx"),
    route("nutrition", "./pages/nutrition/nutrition.tsx"),
    route("contacts", "./pages/contacts/contacts.tsx"),
  ]),
] satisfies RouteConfig;
