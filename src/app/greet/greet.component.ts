import { Component } from '@angular/core';
import { GreetingService } from '../shared/greeting.service';

@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {

  greeting !: string;

  constructor(private gr: GreetingService){
    this.greeting = gr.greet('Pali');
    
  }
}
