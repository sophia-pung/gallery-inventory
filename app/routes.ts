import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // This is the home route
  route("/home", "routes/gallery-manager/Page.tsx"), // Define the gallery-manager route
] satisfies RouteConfig;
