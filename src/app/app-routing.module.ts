import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [{
  path: 'company', component: CompanyComponent},
  { path: 'employee', component: EmployeeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'employee/:id', component: DetailComponent },
  { path: 'company/:id', component: DetailComponent },
  {path:'form',component:FormComponent},
  { path: '**', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
