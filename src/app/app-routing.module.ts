import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from './compoment/list-product/list-product.component';
import {EditUserComponent} from './compoment/edit-user/edit-user.component';
import {CreateComponent} from './compoment/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
