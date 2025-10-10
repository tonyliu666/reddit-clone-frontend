import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("r/:communityName", "routes/community.tsx"),
] satisfies RouteConfig;
