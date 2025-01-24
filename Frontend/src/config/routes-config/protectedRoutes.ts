import { RoutesType } from "@/lib/types/routes";
import { ROUTES } from "./routes";
import { lazy } from "react";

export const protectedRoutes: RoutesType = [
    {
        key: "dashboards",
        path: ROUTES.DASHBOARD,
        component: lazy(() => import('@/views/dashboard')),
    }
];