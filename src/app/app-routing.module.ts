import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { ListContentComponent } from './components/list-content/list-content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AmazonProductsTableComponent } from './components/amazon-products-table/amazon-products-table.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'manage-brand', component: ManageBrandComponent},
  {path: 'visual-management', component: VisualManagementComponent},
  {path: 'amazon-products', component: AmazonProductsComponent},
  {path: 'amazon-products-table', component: AmazonProductsTableComponent},
  {path: 'recovery-password', component: RecoveryPasswordComponent},
  {path: 'new-password', component: NewPasswordComponent},
  {path: 'congrats', component: CongratsComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'manage-abc', component: ManageAbcComponent},
  {path: 'visual-manage-abc', component: VisualManageAbcComponent},
  {path: 'content-management', component: ContentManagementComponent},
  {path: 'list-content', component: ListContentComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
