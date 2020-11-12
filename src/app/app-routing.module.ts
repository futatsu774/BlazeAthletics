import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsDetailComponent } from './products-page/products-detail/products-detail.component';
import { ProductsListComponent } from './products-page/products-list/products-list.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';
import { UserCartPageComponent } from './user-cart-page/user-cart-page.component';

const appRoutes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component: HomepageComponent},
    {path:'login', component: LoginPageComponent},
    {path:'sign-up', component: SignupPageComponent},
    {path:'about-us', component: AboutUsComponent},
    {path:'products', component: ProductsPageComponent, children:
    [
        {path:'items', component: ProductsListComponent},
        {path:'detail', component: ProductsDetailComponent}
    ]},
    {path:'FAQs', component: FaqPageComponent},
    {path:'MyAccount', component: UserAccountPageComponent},
    {path:'MyCart', component:UserCartPageComponent},
    {path:'CheckOut', component: CheckoutPageComponent}
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