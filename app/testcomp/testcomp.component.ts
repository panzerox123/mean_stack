import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCardModule, MatSliderModule, MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})

@NgModule ({
  declarations: [TestcompComponent],
  imports: [MatCardModule,MatSliderModule, MatButtonModule]
})
export class TestcompComponent implements OnInit {

  constructor() {}
    

  
   

  ngOnInit() {
    
    
      
    
    
  

}} 
