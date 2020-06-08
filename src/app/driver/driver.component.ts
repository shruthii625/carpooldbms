import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { Router } from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html'
  
  
 
  ,
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  status1=true;
  removeDriverComponent=false;
  data;
  drivername;
  
  constructor(private httpClient:HttpClient, private router:Router){
    //alert("constructor driver component");
    
    this.removeDriverComponent=false;

  }
  

  ngOnInit() {
  }

  removeComponent()
  {
    //alert("remove comp and going to redirect to parent component")
    this.removeDriverComponent=true;
    window.location.href="http://localhost:4200"
  }

  getDriversData(data)
  {
    alert("getDriversData data is invoked")
      alert("Entered drivername : " + data.username);
      //// this.httpClient.get('https://jsonplaceholder.typicode.com/users').
      var credentials={username:data.username,password:data.password};
      this.httpClient.post('http://localhost:8081/login',credentials).
      subscribe((res)=>{this.data=res;
      alert("res is "+res)
      if (res)
      {
        this.status1=false;
        this.drivername=data.username;
        alert("going to redirect now");
        alert("this.drivername is "+this.drivername)
        this.router.navigate(['DriverComponent'])
      }
      else
      {
        alert("login failed");
        this.router.navigate(['AppComponent'])
      }
      });
    
    // subscribe((res)=>{this.data=res;alert(this.data);});
  }

  
}
