import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import{Router} from'@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  companyList: any;
  constructor(public obj1: MyserviceService,private route:Router) {

  }
  ngOnInit(): void {
    this.obj1.getcompany().subscribe((data:any) => {
      
      this.companyList = data;
      console.log(this.companyList)
    });
    
  }
  comlist(id: number) {
    // console.log(id);
    
    this.route.navigate(['company', id]);
  }


}
