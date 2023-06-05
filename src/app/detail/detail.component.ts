import { Component ,OnInit} from '@angular/core';
import{ActivatedRoute, Route}from "@angular/router"
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail: any=[]
  detail1: any=[]
  constructor(public obj1: MyserviceService,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getemp();
    this.getcomp();
  }
    
  getemp() {
    let id = this.route.snapshot.paramMap.get('id');
  this.obj1.getcdetail(id).subscribe((data) => {
      
    this.detail = data;
    console.log(this.detail)
  });
  }
  
  getcomp() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id,"userid");
    
    this.obj1.getcomdetail(id).subscribe((data:any) => {
      
      this.detail1 = data;
      console.log(this.detail1);
    });
  
  }

}
