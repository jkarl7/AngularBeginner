import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Module1Component } from './module1/module1.component';
import {Module1serviceService} from './module1/service/module1service.service';
import { HttpStatusComponent } from './httpstatus/http-status.component';
import {HttpStatusService} from './httpstatus/service/httpstatus.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Module1Component,
    HttpStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [Module1serviceService, HttpStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
