import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import {MatSliderModule, MatButtonModule, MatCardModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,MatInputModule,MatFormFieldModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {ProductListCompComponent} from './product-list-comp/product-list-comp.component'
//import {ProductListCompComponent} from './product-list-comp/product-list-comp.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'products', component: ProductListCompComponent },
  { path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    WelcomePageComponent,
    LoginPageComponent,
    ProductListCompComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  RouterModule.forRoot(routes),
  HttpClientModule,
  MatListModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    
    BrowserAnimationsModule,
   // ProductListCompComponent
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*const routes: Routes = [
  { path: 'cart', component: WelcomePageComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];*/