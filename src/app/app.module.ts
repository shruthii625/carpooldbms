import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';
import { DriverComponent } from './driver/driver.component';
import { UsersComponent } from './users/users.component';
import { CreatetripComponent } from './createtrip/createtrip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DriverComponent,
    UsersComponent,
    CreatetripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
