import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emp: Employee={
    name:'Guru',
    salary:12345
    }
   
  status="Home Page"  
    
  constructor() { }

  ngOnInit() {
  }

}
