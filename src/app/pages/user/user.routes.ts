import { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { DashboardComponent } from "../../shared/dashboard/dashboard.component";
import { PagesRoute } from "../pages.model";

export const userRoutes: Routes = [
    {
        path:'',
        loadComponent: () => UserComponent,
        children:[
            {
              path: '',
              redirectTo: PagesRoute.DASHBOARD,
              pathMatch: "full"  
            },
            {
                path: PagesRoute.DASHBOARD,
                loadComponent: () => DashboardComponent
              },
        ]
    }
]