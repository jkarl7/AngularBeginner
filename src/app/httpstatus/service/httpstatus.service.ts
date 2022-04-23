import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {
  private statusUrl = '/api/status';

  constructor(private http: HttpClient) {
    console.log('ENVIRONMENT: ' + environment.production);
  }

  // Get the status
  getStatus(): Promise<void | any> {
    console.log('ENVIRONMENT: ' + environment.production);
    return this.http.get(this.statusUrl)
      .toPromise()
      .then(response => response)
      .catch(this.error);
  }

  // Error handling
  private error(error: any) {
    const message = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}
