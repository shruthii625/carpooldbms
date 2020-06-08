import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  template: `
  <div *ngIf="status1" style="background-color:#577">
  <h1>Users' LoginIn Page</h1>
  <form #userlogin = "ngForm" (ngSubmit) = "getUsersData(userlogin.value)" >
      <table>
          <tr>
      <td>Enter user name: </td><td><input type = "text" name = "username" placeholder = "userrname" ngModel></td>
      </tr>
      <tr>
      <td>Enter password: </td><td><input type = "password" name = "password" placeholder = "userrpassword" ngModel></td>
      </tr>
      <tr>
      <td></td><td><input type = "submit" value = "submit"></td>
      </tr>
  </table>
   </form>
   </div>

   <div *ngIf="data && !removeUserComponent" style="background-color:#577;">
  
   <h1> Welcome Users Details Page </h1>
   <form #usersDetails = "ngForm" (ngSubmit) = "setUsersData(usersDetails.value)" >
   <table>
   <tr>
 <td>Enter Source name: </td><td><input type = "text" name = "source" placeholder = "source place" ngModel></td>
 </tr>
 <tr>
 <td>Enter Destination: </td><td><input type = "text" name = "destination" placeholder = "destination place" ngModel></td>
 </tr>
 <tr>
 <td></td><td><input type = "submit" value = "submit"></td>
 <td><input type = "Reset" value = "Reset"></td>
 <td><input type = "button" value = "Cancel" (click)="removeUsersComponent()"></td>
 </tr>
 </table>
 </form>

 
<h1> Driver Details </h1>
<table border="2">
<tr>
  <td>Name</td>
  <td>Source</td>
  <td>Destination</td>
</tr>

<tr *ngFor="let x of data">
  <td> {{x.name}} </td>
  <td> {{x.source}} </td>
  <td> {{x.destination}} </td>
</tr>
</table>

 

   </div>
   `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  status1=true;
  removeUserComponent=false;
  data;
  username;

  constructor(private httpClient: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  removeUsersComponent()
  {
    alert("Showing Home Page")
    this.removeUserComponent=true;
    window.location.href="http://localhost:4200"
  }

  setUsersData(data)
  {
    //alert("setUsersData")
    //alert("source is "+data.source)
    //alert("destination is "+data.destination)
    //alert("user name is "+this.username)
    var tripDetails={source:data.source,destination:data.destination};
    this.httpClient.post('http://localhost:8081/getTrip',tripDetails).
    subscribe( (res)=>{
      this.data=res;
    if (this.data!=null)
    {
      alert("Drivers Available for this route... Click to see the details");
      //alert("count is "+(this.data).length);
      
    }
    else
    {
      alert("No drivers available for this route");
      this.removeUserComponent=true;
      window.location.href="http://localhost:4200"
  
    }
  });

  }

  
  getUsersData(data)
  {
    // alert("getUsersData data is invoked")
    // alert("Entered username : " + data.username);
    //// this.httpClient.get('https://jsonplaceholder.typicode.com/users').
    var credentials={username:data.username,password:data.password};
    this.httpClient.post('http://localhost:8081/userlogin',credentials).
    subscribe((res)=>{
    this.data=res;
    // alert("res is "+res)
    if (res)
    {
      this.status1=false;
      this.username=data.username;
      // alert("true .... going to redirect now to user details page "+this.username);
      // alert("this.username is "+data.username)
      //this.router.navigate(['DriverComponent'])
    }
    else
    {
      alert("Login Failed")
      this.router.navigate(['AppComponent'])
    }
    });
  }

}
