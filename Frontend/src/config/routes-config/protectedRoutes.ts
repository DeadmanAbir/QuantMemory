import { RoutesType } from "@/lib/types/routes";
import { ROUTES } from "./routes";
import { lazy } from "react";
import DefaultLayout from "@/components/layouts/default-layout";

export const protectedRoutes: RoutesType = [
    {
        key: "dashboards",
        path: ROUTES.DASHBOARD,
        component: lazy(() => import('@/views/dashboard')),
        layout: DefaultLayout
    }
];