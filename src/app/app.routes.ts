import { Routes } from '@angular/router';
import { landingRoutes } from './landing/landing.route';
import { getUserType } from './shared/storage';
import { pagesRoutes } from './pages/pages.routes';
import { UserTypeRoute } from './pages/pages.model';


    export const checkForAuthorisedUser = () => {
        const userType = getUserType()
        console.log(userType)
        console.log(userType?.length)
        if(userType?.length === 0){
            return false
        }
        return true
        // return (userType == 'user' || 'admin') ? true : false
    }

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => landingRoutes
    },
    {
        path: '',
        canActivate: [checkForAuthorisedUser],
        loadChildren: () => pagesRoutes
    },
    
];



