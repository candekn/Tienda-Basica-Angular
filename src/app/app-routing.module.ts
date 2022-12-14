import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'products',
  component: ProductsComponent
},
{ path: '', pathMatch: 'full', redirectTo: 'login' },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
