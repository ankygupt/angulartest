import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { PagesRoute, UserTypeRoute } from "./pages.model";
import { DashboardComponent } from "../shared/dashboard/dashboard.component";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { getUserType } from "../shared/storage";
import { adminRoutes } from "./admin/admin.routes";
import { userRoutes } from "./user/user.routes";

export const checkForAuthorisedUser = () => {
    // const userType = getUserType()
    // if (userType != '') return false;
    // return true
}

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => PagesComponent,
        children: [
            {
                path: '',
                
                canMatch: [() => {
                    const userType = getUserType()
                    console.log(userType)
                    return userType === UserTypeRoute.ADMIN
                }],
                loadChildren: () => adminRoutes
            },
            {
                path: '',
                canMatch: [() => {
                    const userType = getUserType()
                    console.log(userType)
                    return userType === UserTypeRoute.USER
                }],
                loadChildren: () => userRoutes
            }
        ]
    }
]