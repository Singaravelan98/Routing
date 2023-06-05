import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router} from "@angular/router"
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeList: any;
  id: any;
  insert: any;
yourname: any;
  email: any;
  gender: any;
age: any;
  message: any;
  isSubmitDisabled: boolean = true;
  constructor(public obj1: MyserviceService,private rout:Router,private http:HttpClient) {

  }
  ngOnInit(): void {
    this.getall();
    this.createuser();
    
  }
  updateSubmitButtonState() {
    const fields = [this.yourname, this.email, this.gender, this.age, this.message];
    this.isSubmitDisabled = fields.every(field => !field || field.trim().length === 0);
  }

  getall() {
    this.obj1.getemployee().subscribe((data:any) => {
      
      this.employeeList = data;
      console.log(this.employeeList)
    });
  }
  createuser() {
    // Validate the input fields
    if (!this.yourname || !this.email || !this.gender || !this.age || !this.message) {
      console.log("Please fill in all the required fields.");
      return;
    }
    if (this.isSubmitDisabled) {
      console.log("Please fill in all the required fields.");
      return;
    }
  
  
    let body = {
      yourname: this.yourname,
      email: this.email,
      gender: this.gender,
      age: this.age,
      message: this.message
    };
  
    this.obj1.getinsert(body).subscribe((data: any) => {
      console.log(data);
      this.getall();
    });
  }
  
  edituser(id: string) {
    
    this.obj1.getcdetail(id).subscribe((data:any) => {
      // console.log(data);
      this.id = data[0].id;
      this.yourname = data[0].yourname;
      this.email = data[0].email;
      this.gender = data[0].gender;
      this.age = data[0].age;
      this.message = data[0].message;

    });
  }
  updateuser() {
    let all:any = {
      id: this.id,
      yourname: this.yourname,
      email: this.email,
      gender: this.gender,
      age: this.age,
      message: this.message
    };
    console.log("inside data");
    this.obj1. getupdate(all).subscribe((data:any) => {
      console.log(data);
      this.getall();
    });
   
  }
  getdele(id:any) {
    this.obj1.getdelete(id).subscribe((data: any) => {
      console.log(data);
      this.getall();
    });
  }

  list(id: number) {
    // console.log(id);
    
    this.rout.navigate(['employee', id]);
  }

}
