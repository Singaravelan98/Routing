import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent {
  studentList: any;
  constructor(public obj1: MyserviceService) {

  }
  ngOnInit(): void {
    this.obj1.getStudentList().subscribe((data) => {
      
      this.studentList = data;
      console.log(this.studentList)
    });

    // this.obj1.getStudentList().subscribe(
    //   (data) => {
    //     this.studentList = data;
    //     console.log(this.studentList);
    //   },
    //   (error) => {
    //     console.error('An error occurred:', error);
    //   }
    // );
  
  }


}
