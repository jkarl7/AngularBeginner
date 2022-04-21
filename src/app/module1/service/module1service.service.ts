import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Module1serviceService {

  getCourses() {
    return ['Pede1', 'Pede2', 'Pede3'];
  }

  constructor() { }
}
