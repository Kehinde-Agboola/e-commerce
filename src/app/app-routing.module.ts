import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products/admin',
    pathMatch: 'full',
  },
  {
    path: 'products/admin',
    component: HomeComponent,
  },
  {
    path: 'products/add',
    component: AddProductsComponent,
  },
  {
    path: 'products/edit/:productId',
    component: EditProductsComponent,
  },
  {
    path: 'products/view/:contactId',
    component: ViewProductsComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
