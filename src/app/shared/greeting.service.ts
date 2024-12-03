import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  greet (name: string): string {
    return `Hello: ${name}`;
  }

}
