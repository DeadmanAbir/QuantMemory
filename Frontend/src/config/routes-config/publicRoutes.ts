import { RoutesType } from "@/lib/types/routes";
import { ROUTES } from "./routes";
import { lazy } from "react";

export const publicRoutes: RoutesType = [
    {
        key: "sign-in",
        path: ROUTES.SIGNIN,
        component: lazy(() => import('@/views/authViews/sign-in'))

    },
    {
        key: "home",
        path: ROUTES.HOME,
        component: lazy(() => import('@/views/home'))

    }
];