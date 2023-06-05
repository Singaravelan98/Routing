import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FromData } from '../from-data';


  @Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
  })
export class FormComponent {
  // myform: any;
    data = new FromData("velan", "male", "age");
    adddetail(data:any) {
     console.log(data);
     
    }
}
