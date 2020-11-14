import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
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
import { AdminLoginComponent } from './admin-login/adminLogin';
import { DashboardComponent } from './dashboard-page/dashboardPage';
import { EditAccPageComponent } from './edit-account-page/editAccPage';
import { EditProductComponent } from './edit-product-page/editProductPage';
import { InventoryComponent } from './inventory-page/inventoryPage';
import { ManageAdminComponent } from './manage-admin-page/manageAdminPage';
import { NewAcctComponent } from './new-account-page/newAccPage';
import { NewProductComponent } from './new-product-page/newProductPage';
import { OrderCancelledComponent } from './orderdtl-cancel-page/orderDtl_Cancelled';
import { OrderForDeliveryComponent } from './orderdtl-delivery-page/orderDtl_ForDelivery';
import { OrderHistoryComponent } from './orderdtl-history-page/orderDtl_History';
import { OrderOngoingComponent } from './orderdtl-ongoing-page/orderDtl_OnGoing';
import { OrderPendingComponent } from './orderdtl-pending-page/orderDtl_Pending';
import { OrderToPayComponent } from './orderdtl-topay-page/orderDtl_ToPay';
import { RegisteredAccountsComponent } from './registered-accounts-page/registeredAcc';


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
    {path:'CheckOut', component: CheckoutPageComponent},
    {path:'adminlogin', component: AdminLoginComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'editaccount', component: EditAccPageComponent},
    {path:'editproduct', component: EditProductComponent},
    {path:'inventory', component: InventoryComponent},
    {path:'manageadmin', component: ManageAdminComponent},
    {path:'newacct', component: NewAcctComponent},
    {path:'newproduct', component: NewProductComponent},
    {path:'ordercancelled', component: OrderCancelledComponent},
    {path:'orderfordelivery', component: OrderForDeliveryComponent},
    {path:'orderhistory', component: OrderHistoryComponent},
    {path:'orderongoing', component: OrderOngoingComponent},
    {path:'orderpending', component:OrderPendingComponent},
    {path:'ordertopay', component:OrderToPayComponent},
    {path:'registeredaccounts', component:RegisteredAccountsComponent}

    
  


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