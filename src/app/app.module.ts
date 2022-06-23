import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AmazonProductsComponent } from './components/amazon-products/amazon-products.component';
import { ManageBrandComponent } from './components/manage-brand/manage-brand.component';
import { VisualManagementComponent } from './components/visual-management/visual-management.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { LoginComponent } from './components/login/login.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { CongratsComponent } from './components/congrats/congrats.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ManageAbcComponent } from './components/manage-abc/manage-abc.component';
import { VisualManageAbcComponent } from './components/visual-manage-abc/visual-manage-abc.component';

//inicio de servicios 
import { CargarScriptsService } from './cargar-scripts.service';
//fin de servicios
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { ListContentComponent } from './components/list-content/list-content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AmazonProductsTableComponent } from './components/amazon-products-table/amazon-products-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AmazonProductsComponent,
    ManageBrandComponent,
    VisualManagementComponent,
    RecoveryPasswordComponent,
    LoginComponent,
    NewPasswordComponent,
    CongratsComponent,
    MainMenuComponent,
    ManageAbcComponent,
    VisualManageAbcComponent,
    ContentManagementComponent,
    ListContentComponent,
    PageNotFoundComponent,
    AmazonProductsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
