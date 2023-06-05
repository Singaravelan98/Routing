import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { MyserviceService } from './myservice.service';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { RouterLink } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
RouterLink
@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
CompanyComponent,
    EmployeeComponent,
    DetailComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
