import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DataTablesModule } from 'angular-datatables';
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


