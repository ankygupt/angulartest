import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { PagesRoute } from "../pages.model";

export const adminRoutes: Routes = [
    {
        path:'',
        loadComponent: () => AdminComponent,
        children:[
            {
              path: '',
              redirectTo: PagesRoute.DASHBOARD,
              pathMatch: "full"  
            },
            {
                path: PagesRoute.DASHBOARD,
                loadComponent: () => import("./dashboard/dashboard.component").then(x => x.AdminDashboardComponent)
            },
        ]
    }
]