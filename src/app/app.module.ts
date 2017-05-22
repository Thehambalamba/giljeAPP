import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdListModule, MdInputModule, MdTooltipModule } from '@angular/material';
import { FlashMessagesModule } from 'angular2-flash-messages';

// komponente
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { AddproductComponent } from './components/addproduct/addproduct.component'

// servisi
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

// rute
const appRoutes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'singleproduct/:id', component: SingleproductComponent},
  {path:'addproduct', component: AddproductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    SingleproductComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
    FlashMessagesModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdInputModule,
    MdTooltipModule
  ],
  providers: [ValidateService, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
