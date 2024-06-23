import { Routes } from '@angular/router';
import { landingRoutes } from './landing/landing.route';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => landingRoutes
    },
    // {
    //     path:'',
    //     canActivate: [() => {}],
    // }
];


export const checkForAuthorisedUser = () => {
    // const router = inject()
}