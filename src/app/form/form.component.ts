import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FromData } from '../from-data';
import { Router} from "@angular/router"


  @Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
  })
  export class FormComponent {
    constructor(private router: Router) {}

  // myform: any;
   
    //   data = new FromData("velan", "male", "age");
    // adddetail(data:any) {
    //  console.log(data);
    // }
    username: any;
    password: any;
  
    onSubmit() {
      // Perform validation
      if (this.username === 'singaravelan' && this.password === 'jiju1998') {
        this.router.navigate(['/employee']);
       
        // Perform further actions after successful login
      } else {
        alert('invalid credentials');
      
        
        // Perform actions for unsuccessful login attempt
      }
    }
}
