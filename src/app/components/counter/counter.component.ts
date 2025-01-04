import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterVal = signal(0);

  Increment(){
    this.counterVal.update((val) => val+1);
  }

  Decrement(){
    this.counterVal.update((val) => val-1);
  }

  Reset(){
    this.counterVal.set(0);
  }
}
