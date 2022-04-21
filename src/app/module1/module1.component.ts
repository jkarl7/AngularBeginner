import { Component, OnInit } from '@angular/core';
import {Module1serviceService} from './service/module1service.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {

  pede = 'LOL';
  peded;

  constructor(service: Module1serviceService) {
    this.peded = service.getCourses();
  }

  ngOnInit(): void {
  }

}
