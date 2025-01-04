import { Component, signal } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homemsg = signal('home msg');

  myKeyUpEvent(event: KeyboardEvent){
    console.log(event.key+ ' key is pressed');
  }
}
