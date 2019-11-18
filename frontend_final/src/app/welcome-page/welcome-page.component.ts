import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartService } from '../cart.service';

//import { LoginPageComponent } from '.app/login-page/login-page.component';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
  

})

@NgModule({
  declarations: [
    //LoginPageComponent,
    
    BrowserModule
  ]}
)


export class WelcomePageComponent implements OnInit {

  constructor(private cartService: CartService, /*private router: Router*/) { }

  ngOnInit() {
  }

}
