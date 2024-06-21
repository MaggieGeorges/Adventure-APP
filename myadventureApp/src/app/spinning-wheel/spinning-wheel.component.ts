// spinning-wheel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.css']
})
export class SpinningWheelComponent {
  outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus']
  result: string = '';

  spinningwheel(){
    const randomIndex = Math.floor(Math.random() * this.outcomes.length);
    this.result = this.outcomes[randomIndex];
    if (this.result === 'Try Again') {
      console.log('You have an extra spin!');
    }
    else {
      console.log('Congrats You won ' + this.result);
    }
  }
}