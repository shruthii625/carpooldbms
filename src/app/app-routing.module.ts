import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path: 'DriverComponent',
    component: DriverComponent
  },

  {
    path: 'UsersComponent',
    component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
