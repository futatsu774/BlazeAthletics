import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
    {path: '', component: HomepageComponent, pathMatch: 'full'},
    {path:'login', component: LoginPageComponent}
]

@NgModule(
    {
        imports:
        [RouterModule.forRoot(appRoutes)],

        exports:
        [RouterModule]
    }
)

export class AppRoutingModule
{

}