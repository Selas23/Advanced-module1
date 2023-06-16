import { 
  Component
} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <h1>This is parent component</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <app-child [count]="counter"></app-child>
  `
})
export class ParentComponent {
  title = 'Component Interaction';
  counter = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent {

// }
