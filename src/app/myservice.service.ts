import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  url = "http://localhost:4000/get"
  url1 = "http://localhost:4000/getall"
  url2="http://localhost:4000/getlist"
  url3 = ("http://localhost:4000")
  url4 = ("http://localhost:4000/company/")
  url5 = "http://localhost:4000/user"
  url6="http://localhost:4000/put"
 
  
  constructor(private http: HttpClient) { }
 
  getStudentList() {
    return this.http.get(this.url);
  }
  getemployee() {
    return this.http.get(this.url1);
  }
  getcompany() {
    return this.http.get(this.url2);
  }
  getcdetail(id: string | null) {
    console.log(id);
    
    return this.http.get(this.url3+'/detail/'+id);
  }
  getcomdetail(id: string | null) {
    console.log(id);
    
    return this.http.get(this.url4+id);
  }
  getinsert(body:any) {
    return this.http.post(this.url5,body)
  }
  getupdate(data:any) {
    return this.http.put(this.url6,data)
  }
  getdelete(id:any) {
    return this.http.put(this.url3 + '/delete', { id: id })
  }

}