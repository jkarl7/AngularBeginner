import { Component, OnInit } from '@angular/core';
import {HttpStatusService} from './service/httpstatus.service';

@Component({
  selector: 'app-httpstatus',
  templateUrl: './http-status.component.html',
  styleUrls: ['./http-status.component.css']
})
export class HttpStatusComponent implements OnInit {

  title = 'node-express-angular';
  status = 'DOWN';
  httpStatusService;
  constructor(httpStatusService: HttpStatusService ) {
    this.httpStatusService = httpStatusService;
  }

  ngOnInit(): void {
    this.httpStatusService
      .getStatus()
      .then((result: any) => {
        this.status = result.status;
      });
  }

}
