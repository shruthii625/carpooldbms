import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { Router,NavigationStart  } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data;
  flag1=true;
  removeDriverComponent=false;
  constructor(private httpClient:HttpClient, private router:Router){
    //alert("constructor appcomponent")
    this.removeDriverComponent=false;
  }
  

  public ngOnInit() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/' || events.url === '/home') {
          this.flag1 = true;
        } else {
          this.flag1 = false;
        }
      }
    });
  }

  getData(data)
  {
    //alert("get data is invoked")
    //alert("Entered username : " + data.username);
    //// this.httpClient.get('https://jsonplaceholder.typicode.com/users').
    var credentials={username:data.username,password:data.password};
    this.httpClient.post('http://localhost:8081/login',credentials).
    subscribe((res)=>{this.data=res;
    //alert("res is "+res)
    if (res)
    {
      //alert("going to redirect now");
      this.router.navigate(['DriverComponent'])
    }
    else
    {
      alert("Login failed")
    }
    });
  }
}
