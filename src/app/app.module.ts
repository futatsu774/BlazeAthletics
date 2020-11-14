import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';
import { UserCartPageComponent } from './user-cart-page/user-cart-page.component';
import { ProductsListComponent } from './products-page/products-list/products-list.component';
import { ProductsDetailComponent } from './products-page/products-detail/products-detail.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
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
import { OrderOngoingComponent } from './orderdtl-ongoing-page/orderDtl_OnGoing';
import { OrderPendingComponent } from './orderdtl-pending-page/orderDtl_Pending';
import { OrderToPayComponent } from './orderdtl-topay-page/orderDtl_ToPay';
import { RegisteredAccountsComponent } from './registered-accounts-page/registeredAcc';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    LoginPageComponent,
    AboutUsComponent,
    ProductsPageComponent,
    SignupPageComponent,
    FaqPageComponent,
    UserAccountPageComponent,
    UserCartPageComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    CheckoutPageComponent,
    AdminLoginComponent,
    DashboardComponent,
    EditAccPageComponent,
    EditProductComponent,
    InventoryComponent,
    ManageAdminComponent,
    NewAcctComponent,
    NewProductComponent,
    OrderCancelledComponent,
    OrderForDeliveryComponent,
    OrderOngoingComponent,
    OrderPendingComponent,
    OrderToPayComponent,
    RegisteredAccountsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
