import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './compoment/list-product/list-product.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './compoment/edit-user/edit-user.component';

import {ReactiveFormsModule} from '@angular/forms';
import { CreateComponent } from './compoment/create/create.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoeyComponent } from './category/edit-categoey/edit-categoey.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    EditUserComponent,
    CreateComponent,
    CreateCategoryComponent,
    EditCategoeyComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
