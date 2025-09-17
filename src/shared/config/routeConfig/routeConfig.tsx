import {RouteProps} from "react-router-dom";
import {Main} from "pages/Main";
import {Info} from "pages/Info";

export enum AppRoutes {
    MAIN = 'main',
    INFO = 'info'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.INFO]: '/info'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main/>
    },
    [AppRoutes.INFO]: {
        path: RoutePath.info,
        element: <Info/>
    }
}