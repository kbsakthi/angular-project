import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {

  constructor() {}

    display(){
      console.log("Hello world");
    }
   
}
