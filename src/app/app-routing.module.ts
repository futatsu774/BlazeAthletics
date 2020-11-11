import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const appRoutes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component: HomepageComponent},
    {path:'login', component: LoginPageComponent},
    {path:'sign-up', component: SignupPageComponent},
    {path:'about-us', component: AboutUsComponent},
    {path:'products', component: ProductsPageComponent},
    {path: 'FAQs', component: FaqPageComponent}
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