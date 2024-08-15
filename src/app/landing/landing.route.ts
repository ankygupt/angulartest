import { Routes } from "@angular/router";
import { LandingRouteEnum } from "./landing.model";

export const landingRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./landing.component')
            .then(x => x.LandingComponent),
        children: [
            {
                path:'',
                redirectTo: LandingRouteEnum.LANDING_LOGIN,
                pathMatch:"full"
            },
            {
                path: LandingRouteEnum.LANDING_ABOUT,
                loadComponent: () => import('./pages/about/about.component')
                    .then(x => x.AboutComponent),
            },
            {
                path: LandingRouteEnum.LANDING_CONTACT,
                loadComponent: () => import('./pages/contact/contact.component')
                .then(x => x.ContactComponent),
            },
            {
                path: LandingRouteEnum.LANDING_LOGIN,
                loadComponent: () => import('./pages/login/login.component')
                    .then(x => x.LoginComponent),
            },
            {
                path: LandingRouteEnum.LANDING_REGISTER,
                loadComponent: () => import('./pages/register/register.component')
                    .then(x => x.RegisterComponent),
            },

        ]
    }
] 